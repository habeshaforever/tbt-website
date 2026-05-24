import { motion } from "framer-motion";

import { InlineWidget } from "react-calendly";

import { Header } from "@/components/Header";

import { Footer } from "@/components/Footer";


const Contact = () => {

  return <div className="min-h-screen bg-background">

      <Header />

      

      {/* Hero Section */}

      <section className="pt-24 pb-6 bg-gradient-dark relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-dark" />
        <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-primary/10 rounded-full blur-3xl" />

        

        <div className="container mx-auto px-4 sm:px-6 relative z-10">

          <motion.div initial={{

          opacity: 0,

          y: 20

        }} animate={{

          opacity: 1,

          y: 0

        }} transition={{

          duration: 0.6

        }} className="text-center max-w-3xl mx-auto">

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full border border-primary/30 mb-4">
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                Limited Availability
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-4 sm:mb-6">
              Book Your <span className="text-accent">Strategy Call</span>
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

      <section className="pt-6 pb-12">

        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">

          <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">

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

          }} className="lg:col-span-2 flex items-center w-full">

              <div className="bg-card rounded-2xl p-4 sm:p-6 shadow-lg border border-border">

                <h2 className="text-xl font-bold text-primary mb-4">

                  Let's Talk About Your Needs

                </h2>

                

                <p className="text-sm text-muted-foreground mb-5">

                  Stop paying U.S. rates for roles you can fill at 70% less. Tandem Bridge Talent

                  connects you with bilingual Colombian professionals who work your hours, stay long-term, and cost a fraction of what you're paying now.

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

          }} className="lg:col-span-5 w-full">

              <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border">

                <div className="overflow-hidden h-[580px] lg:h-[660px]">
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

            </motion.div>

          </div>

        </div>

      </section>



      <Footer />

    </div>;

};

export default Contact;