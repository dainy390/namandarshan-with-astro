import { useOutletContext } from 'react-router-dom';
import { Utensils, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PrasadamSection: React.FC = () => {
    const { temple } = useOutletContext<{ temple: any }>();
    return (
        <section id="Prasadam" className="scroll-mt-32">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-orange-500 mb-8 flex items-center gap-3">
                <Utensils className="w-8 h-8" />
                Pure Prasadam from {temple.name}
            </h2>
            <div className="bg-orange-50/50 p-8 rounded-2xl border border-orange-100 text-center space-y-6">
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                    Experience the divine taste of sacred prasadam from {temple.name}, delivered right to your doorstep. We ensure that the prasadam is handled with the utmost sanctity.
                </p>
                <div className="flex justify-center">
                    <Link to="/prasadam">
                        <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-6 rounded-xl text-lg flex items-center gap-2">
                            Order Prasadam
                            <ArrowRight className="w-5 h-5" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PrasadamSection;
