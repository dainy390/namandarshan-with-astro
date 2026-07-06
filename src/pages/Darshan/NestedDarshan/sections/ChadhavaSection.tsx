import { useOutletContext } from 'react-router-dom';
import { Gift, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ChadhavaSection: React.FC = () => {
    const { temple } = useOutletContext<{ temple: any }>();
    return (
        <section id="Chadwa" className="scroll-mt-32">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-orange-500 mb-8 flex items-center gap-3">
                <Gift className="w-8 h-8" />
                Offer Chadhava at {temple.name}
            </h2>
            <div className="bg-orange-50/50 p-8 rounded-2xl border border-orange-100 text-center space-y-6">
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                    Sending offerings to the deity is a profound way to express your devotion. We facilitate the offering of vastras, ornaments, and other sacred items at {temple.name}.
                </p>
                <div className="flex justify-center">
                    <Link to="/chadhava">
                        <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-6 rounded-xl text-lg flex items-center gap-2">
                            View Chadhava Options
                            <ArrowRight className="w-5 h-5" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ChadhavaSection;
