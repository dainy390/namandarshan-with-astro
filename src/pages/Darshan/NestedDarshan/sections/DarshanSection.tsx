import { useOutletContext } from 'react-router-dom';
import { Star, BookOpen, CheckCircle2 } from 'lucide-react';
import LinkifiedText from '@/components/common/LinkifiedText';

const DarshanSection: React.FC = () => {
    const { temple, fixCase } = useOutletContext<{ temple: any; fixCase: (t: string) => string }>();
    return (
        <div className="space-y-12 md:space-y-24">
            {/* Types of Darshan Section */}
            {temple.darshanOptions && temple.darshanOptions.length > 0 && (
                <section id="Types of Darshan" className="scroll-mt-32">
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-orange-500 mb-8 flex items-center gap-3">
                        <Star className="w-8 h-8" />
                        Types of Darshan
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {temple.darshanOptions.map((option: any, idx: number) => (
                            <div key={idx} className="bg-white p-6 rounded-xl border border-orange-100 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="font-bold text-xl text-gray-900 mb-3">{fixCase(option.title)}</h3>
                                <LinkifiedText text={fixCase(option.description)} className="text-gray-600 mb-4" />
                                {option.price && (
                                    <div className="inline-block bg-orange-100/50 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">
                                        {option.price}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Booking Process Section */}
            {temple.bookingProcess && temple.bookingProcess.length > 0 && (
                <section id="BookingProcess" className="scroll-mt-32">
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-orange-500 mb-8 flex items-center gap-3">
                        <BookOpen className="w-8 h-8" />
                        {temple.bookingProcessTitle || "How to Book"}
                    </h2>
                    <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:w-0.5 before:-translate-x-px before:h-full before:bg-gradient-to-b before:from-transparent before:via-orange-200 before:to-transparent">
                            {temple.bookingProcess.map((step: any, idx: number) => (
                                <div key={idx} className="relative flex items-start gap-6 group">
                                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-orange-100 group-hover:bg-orange-500 group-hover:text-white transition-colors z-10 shadow-sm font-bold text-orange-600 relative">
                                        {idx + 1}
                                    </div>
                                    <div className="pt-1">
                                        <h3 className="font-bold text-xl text-gray-900 mb-2">{fixCase(step.step)}</h3>
                                        <LinkifiedText text={fixCase(step.description)} className="text-gray-600" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}


        </div>
    );
};

export default DarshanSection;
