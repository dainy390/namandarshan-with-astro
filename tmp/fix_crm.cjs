const fs = require('fs');
const path = require('path');

const files = [
    'c:\\Users\\roya6\\OneDrive\\Desktop\\Naman-newfront\\namandarshan\\src\\pages\\CRM\\ChadhawaCRM.tsx',
    'c:\\Users\\roya6\\OneDrive\\Desktop\\Naman-newfront\\namandarshan\\src\\pages\\CRM\\PrasadamCRM.tsx'
];

files.forEach(filePath => {
    if (!fs.existsSync(filePath)) {
        console.log(`File not found: ${filePath}`);
        return;
    }
    let content = fs.readFileSync(filePath, 'utf8');

    // 1. Add Eye import
    if (!content.includes('Eye') && content.includes('lucide-react')) {
        content = content.replace(/import {([^}]*)} from "lucide-react";/, (match, p1) => {
            return `import { ${p1.trim()}, Eye } from "lucide-react";`;
        });
    }

    // 2. Remove onEdit from MobileBookingCard
    // Look for the block and remove only the onEdit prop
    content = content.replace(/onEdit=\{\(item\) => \{[\s\S]*?setSelectedLead\(item\);[\s\S]*?setIsFormOpen\(true\);[\s\S]*?\}\}/g, '');
    content = content.replace(/onEdit=\{\(\) => \{[\s\S]*?setSelectedLead\(lead\);[\s\S]*?setIsFormOpen\(true\);[\s\S]*?\}\}/g, '');

    // 3. Update desktop action cell
    // Replace the specific TableCell block
    const tableCellRegex = /<TableCell>\s*<div className="flex gap-2">\s*<Button[\s\S]*?👁️ View[\s\S]*?Edit[\s\S]*?<\/div>\s*<\/TableCell>/g;
    
    content = content.replace(tableCellRegex, 
    `<TableCell>
                                                    <div className="flex gap-2">
                                                        <Button
                                                            onClick={() => {
                                                                setViewLead(lead);
                                                                setIsDetailsOpen(true);
                                                            }}
                                                            variant="ghost"
                                                            size="icon"
                                                            className="text-purple-600 hover:text-purple-700"
                                                            title="View Details"
                                                        >
                                                            <Eye className="w-4 h-4" />
                                                        </Button>
                                                    </div>
                                                </TableCell>`);

    fs.writeFileSync(filePath, content);
    console.log(`Updated: ${filePath}`);
});
