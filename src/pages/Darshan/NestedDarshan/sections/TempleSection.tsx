import { useOutletContext } from 'react-router-dom';
import { Clock, AlarmClock, Star } from 'lucide-react';
import LinkifiedText from '@/components/common/LinkifiedText';

const TempleSection: React.FC = () => {
    const { temple, fixCase } = useOutletContext<{ temple: any; fixCase: (t: string) => string }>();
    return (
        <div className="space-y-12 md:space-y-24">
            {/* About Section */}
            <section id="Temple" className="scroll-mt-32">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-orange-500 mb-6 flex items-center gap-3">
                    <span className="text-3xl">🕉</span>
                    About {temple.name}
                </h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                    {temple.historyArchitectureDesc && (
                        <LinkifiedText text={fixCase(temple.historyArchitectureDesc)} className="whitespace-pre-line" />
                    )}

                    {/* SEO "Smart Play" Strategy Section for VIP Darshan Search Intent */}
                    <div className="mt-8 bg-amber-50/60 p-6 rounded-2xl border border-amber-100">
                        <h3 className="font-display text-2xl font-bold text-amber-900 mb-4">
                            Looking for VIP Darshan at {temple.name}?
                        </h3>
                        <p className="mb-4">
                            Many devotees search for VIP Darshan or Special Darshan at {temple.name}. Please note that queue management is strictly handled by temple authorities, and skip-the-line access is not permitted. Instead, we elevate your visit with our Guided Darshan Assistance, ensuring you have a Pandit Ji by your side to navigate the complex and explain its rich history.
                        </p>
                        <p>
                            <strong>Understanding the difference between a VIP Darshan and our Guided Assistance:</strong> While a VIP Darshan (which we do not offer) focuses solely on bypassing the crowd, our Guided Darshan Assistance focuses on spiritual enrichment. You will proceed through standard queues, but with the dedicated support of a local Pandit Ji who knows the temple's daily rituals intimately.
                        </p>
                    </div>
                </div>
            </section>

            {/* Types of Darshan Section */}
            <section id="Types-of-Darshan" className="scroll-mt-32">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-orange-500 mb-6 flex items-center gap-3">
                    <Star className="w-7 h-7 text-orange-500 fill-none" />
                    Types of Darshan
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-2xl border border-orange-100/80 shadow-sm hover:shadow-md transition-all duration-300">
                        <h3 className="font-display text-xl font-bold text-gray-900 mb-2">General Darshan</h3>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            Free entry for the public via the main queue system. Expect 1–3 hours wait time.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-orange-100/80 shadow-sm hover:shadow-md transition-all duration-300">
                        <h3 className="font-display text-xl font-bold text-gray-900 mb-2">Sugam Darshan (Priority)</h3>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            A scheduled time-slot system designed to minimize wait times to 15–30 minutes.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-orange-100/80 shadow-sm hover:shadow-md transition-all duration-300">
                        <h3 className="font-display text-xl font-bold text-gray-900 mb-2">Aarti Darshan</h3>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            Special access passes to sit or stand within the temple during the morning, noon, or evening Aartis.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-orange-100/80 shadow-sm hover:shadow-md transition-all duration-300">
                        <h3 className="font-display text-xl font-bold text-gray-900 mb-2">Personalized Darshan Support</h3>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            Guided walkthrough and assistance by local experts to assist with custom rituals, priority passes, and smooth movement inside the temple complex.
                        </p>
                    </div>
                </div>
            </section>

            {/* Significance Section */}
            {temple.significance && (temple.significance.title || temple.significance.description || (temple.significance.points && temple.significance.points.length > 0)) && (
                <section>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-orange-500 mb-6 flex items-center gap-3">
                        <span className="text-3xl">✨</span>
                        {temple.significance.title || `Significance of ${temple.name}`}
                    </h2>
                    <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                        {temple.significance.description && <LinkifiedText text={fixCase(temple.significance.description)} />}
                        {temple.significance.points && temple.significance.points.length > 0 && (
                            <ul className="list-disc pl-6 space-y-2">
                                {temple.significance.points.map((point: string, idx: number) => (
                                    <li key={idx}><LinkifiedText text={fixCase(point)} /></li>
                                ))}
                            </ul>
                        )}
                    </div>
                </section>
            )}

            {/* Timings Section */}
            <section id="Timings" className="scroll-mt-32">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-orange-500 mb-8 flex items-center gap-2">
                    <Clock className="w-8 h-8" />
                    Darshan & Seva Timings
                </h2>

                {temple.scheduleDescription && (
                    <LinkifiedText text={fixCase(temple.scheduleDescription)} className="text-lg text-gray-700 mb-8 max-w-4xl leading-relaxed" />
                )}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        {(!temple.scheduleSummer?.length && !temple.scheduleWinter?.length) && (
                            <>
                                <h3 className="font-bold text-xl text-gray-800 mb-6">{temple.name} Darshan Timing</h3>
                                <div className="space-y-4 text-gray-700">
                                    {temple.schedule && temple.schedule.length > 0 ? (
                                        temple.schedule.map((slot: any, index: number) => (
                                            <div key={index} className="flex justify-between py-2 border-b border-dashed border-gray-200">
                                                <span className="font-medium">{slot.label ? `${slot.label.replace(/:+$/, '')}:` : ""}</span>
                                                <span>{slot.time}</span>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="text-gray-500 italic py-4">
                                            Timings will be updated soon.
                                        </div>
                                    )}
                                </div>
                            </>
                        )}

                        {temple.scheduleSummer && temple.scheduleSummer.length > 0 && (
                            <div className="mt-6 border-t pt-4">
                                <h4 className="font-semibold text-gray-800 mb-3 text-lg">Summer Schedule</h4>
                                <div className="space-y-4 text-gray-700">
                                    {temple.scheduleSummer.map((slot: any, index: number) => (
                                        <div key={index} className="flex justify-between py-2 border-b border-dashed border-gray-200">
                                            <span className="font-medium">{slot.label ? `${slot.label.replace(/:+$/, '')}:` : ""}</span>
                                            <span>{slot.time}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {temple.scheduleWinter && temple.scheduleWinter.length > 0 && (
                            <div className="mt-6 border-t pt-4">
                                <h4 className="font-semibold text-gray-800 mb-3 text-lg">Winter Schedule</h4>
                                <div className="space-y-4 text-gray-700">
                                    {temple.scheduleWinter.map((slot: any, index: number) => (
                                        <div key={index} className="flex justify-between py-2 border-b border-dashed border-gray-200">
                                            <span className="font-medium">{slot.label ? `${slot.label.replace(/:+$/, '')}:` : ""}</span>
                                            <span>{slot.time}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {temple.scheduleNote && (
                            <div className="flex items-start gap-2 mt-6 text-gray-700 text-lg italic">
                                <AlarmClock className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                                <p>{fixCase(temple.scheduleNote)}</p>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-full aspect-video bg-amber-50/50 rounded-xl overflow-hidden flex items-center justify-center relative p-2">
                            <img
                                src={temple.mapImage || "https://t4.ftcdn.net/jpg/04/14/66/60/360_F_414666045_L7y5u0b1h1d3b0b1h1d3b0b1h1d3b0b1.jpg"}
                                alt={`${temple.name} Map Image`}
                                className="w-auto h-auto max-w-full max-h-full object-contain rounded-lg border-4 border-double border-amber-200 shadow-md hover:scale-105 transition-all duration-500"
                            />
                        </div>
                        <a
                            href={temple.googleMapLink || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(temple.name + " " + temple.location)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 text-orange-500 font-bold hover:underline"
                        >
                            View on Google Maps
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TempleSection;
