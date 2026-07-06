import Layout from "../components/layout/Layout";
import { Container } from "../components/ui/container";
import SEO from "@/components/SEO";

const Disclaimer = () => {
    return (
        <Layout>
            <SEO title="Disclaimer - Naman Darshan" description="Please read our disclaimer regarding our independent facilitation services." />
            <Container className="py-12 md:py-20">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="text-center space-y-4">
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-stone-900">Disclaimer</h1>
                        <p className="text-xl text-stone-600">Please read our service disclaimer carefully.</p>
                    </div>

                    <div className="prose prose-stone max-w-none text-stone-700 space-y-6">
                        <p className="leading-relaxed text-lg">
                            NamanDarshan provides professional pilgrimage assistance, ritual coordination, and darshan guidance services. Please be advised that NamanDarshan is an independent facilitator and is not affiliated with, nor a representative of, any temple trust or government authority.
                        </p>

                        <p className="leading-relaxed text-lg">
                            We do not offer, sell, or guarantee "VIP Darshan" tickets, priority access, or special entry passes. All darshan access, queue management, and ritual protocols are determined exclusively by the respective temple authorities and are subject to their rules, daily schedules, and real-time availability.
                        </p>

                        <p className="leading-relaxed text-lg">
                            Our services are limited to the professional facilitation, logistics, and guidance of your visit. By booking with us, you acknowledge that you are engaging a private service provider for assistance and coordination, not a direct provider of temple entry.
                        </p>

                        <p className="leading-relaxed text-lg">
                            NamanDarshan operates solely as a technology-enabled platform that facilitates connections between pilgrims and independent third-party service providers. We do not directly deliver, supervise, or control the services rendered by such individuals, and accordingly, NamanDarshan shall not be held responsible or liable for any act, omission, conduct, or outcome attributable to any third-party provider engaged through our platform.
                        </p>
                    </div>
                </div>
            </Container>
        </Layout>
    );
};

export default Disclaimer;
