import { motion } from "framer-motion";

import { InlineWidget } from "react-calendly";

import { Header } from "@/components/Header";

import { Footer } from "@/components/Footer";

import { Mail } from "lucide-react";

const Contact = () => {

  return <div className="min-h-screen bg-background">

      <Header />

      

      {/* Hero Section */}

      <section className="pt-24 pb-6 bg-gradient-hero relative overflow-hidden">

        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

        

        <div className="container mx-auto px-6 relative z-10">

          <motion.div initial={{

          opacity: 0,

          y: 20

        }} animate={{

          opacity: 1,

          y: 0

        }} transition={{

          duration: 0.6

        }} className="text-center max-w-3xl mx-auto">

            <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">

              Book Your Strategy Call

            </h1>

            <p className="text-lg text-primary-foreground/80 mb-2">
              Limited slots available each week. Reserve yours below.
            </p>
            <p className="text-base text-primary-foreground/80">
              This is a 30-minute strategy call with a senior TBT partner. Slots are limited and fill fast.
            </p>

          </motion.div>

        </div>

      </section>



      {/* Main Content */}

      <section className="pt-6 pb-6">

        <div className="max-w-screen-xl mx-auto px-6">

          <div className="grid lg:grid-cols-7 gap-6">

            {/* Contact Info Sidebar */}

            <motion.div initial={{

            opacity: 0,

            x: -20

          }} animate={{

            opacity: 1,

            x: 0

          }} transition={{

            duration: 0.6,

            delay: 0.2

          }} className="lg:col-span-2 flex items-center">

              <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">

                <h2 className="text-xl font-bold text-primary mb-4">

                  Let's Talk About Your Needs

                </h2>

                

                <p className="text-sm text-muted-foreground mb-5">

                  Supercharge your growth with a smarter staffing model. Tandem Bridge Talent 

                  connects you with top-tier, bilingual talent across South America, giving you

                  cost savings, stability, and a simple process that lets you focus

                  on scaling your business.

                </p>



                <div className="space-y-3">

                  <div className="flex items-start gap-3">

                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />

                    <p className="text-foreground text-sm">

                      <span className="font-semibold">Cut staffing costs by up to 70%</span>

                      <span className="text-muted-foreground"> while accessing highly skilled, bilingual professionals.</span>

                    </p>

                  </div>



                  <div className="flex items-start gap-3">

                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />

                    <p className="text-foreground text-sm">

                      <span className="font-semibold">Build stable, long-term teams</span>

                      <span className="text-muted-foreground"> with an industry-leading 2% turnover rate.</span>

                    </p>

                  </div>



                  <div className="flex items-start gap-3">

                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />

                    <p className="text-foreground text-sm">

                      <span className="font-semibold">All-inclusive, flat-fee model</span>

                      <span className="text-muted-foreground">  no hidden fees, benefits costs, or contracts.</span>

                    </p>

                  </div>



                  <div className="flex items-start gap-3">

                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />

                    <p className="text-foreground text-sm">

                      <span className="font-semibold">You choose the talent, we handle the rest</span>

                      <span className="text-muted-foreground"> including compliance, payroll, and office space for your remote employees.</span>

                    </p>

                  </div>

                </div>



                <div className="mt-8 pt-8 border-t border-border">

                  <div className="flex items-start gap-4">

                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">

                      <Mail className="w-6 h-6 text-primary" />

                    </div>

                    <div>

                      <h3 className="font-semibold text-foreground mb-1">Email Us</h3>

                      <a href="mailto:info@tandembridge.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">

                        info@tandembridge.com

                      </a>

                    </div>

                  </div>

                </div>

              </div>

            </motion.div>



            {/* Calendly Widget */}

            <motion.div initial={{

            opacity: 0,

            x: 20

          }} animate={{

            opacity: 1,

            x: 0

          }} transition={{

            duration: 0.6,

            delay: 0.3

          }} className="lg:col-span-5">

              <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border">

                <div style={{ position: 'relative' }}>
  <div style={{
    position: 'absolute',
    top: '0',
    right: '0',
    width: '200px',
    height: '110px',
    background: '#ffffff',
    zIndex: 10,
    borderRadius: '0 16px 0 0'
  }} />
  <div style={{ overflow: 'hidden', height: '660px' }}>
    <InlineWidget
      url="https://calendly.com/tandembridge/tbt-strategy-call"
      styles={{
        height: '760px',
        width: '100%',
        marginTop: '-60px'
      }}
      pageSettings={{
        backgroundColor: 'ffffff',
        hideEventTypeDetails: true,
        hideLandingPageDetails: true,
        primaryColor: '2563eb',
        textColor: '1a1a2e'
      }}
    />
  </div>
</div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>



      <Footer />

    </div>;

};

export default Contact;