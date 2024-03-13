import React from "react";
import { Disclosure } from "@headlessui/react";

const faqs = [
  {
    question: "What is Chui Jhal?",
    answer:
      "Chuijhal is a vine-like plant whose roots and stems are used in food. Chuijhal is most commonly used as a spice and condiment. It tastes like ginger and pepper, and tastes great by sucking or chewing the pieces after cooking. It can be done. In the Khulna region, the use of this Chuijhal is widely used in cooking meat.",
  },
  {
    question: "How much Chui Jhal should be added to one kilogram of meat?",
    answer:
      "Usually 50-60 grams of chuizhal is enough for 1 kg of meat. So 8-10 kg of meat can be cooked very well with 500 grams of chuizhal.",
  },
  {
    question: "How to cut chuizhal?",
    answer:
      "Before cutting Chuijhal, you must soak it in water for 10 to 15 minutes. Then first cut it lengthwise along the edge. Then cut it into small pieces as needed.",
  },
  {
    question: "What is the cooking specialty of Chuijhal?",
    answer:
      "Churries cooked with Chuijhal give a strong spicy taste. Apart from meat, fried khichuri, fried fish, the use of Chuijhal in different types of cooking enhances its taste.",
  },
  {
    question: "How to cook with Chuizhal?",
    answer:
      "You can use chuijhal in any dish like soup. To spread the flavor of chuijhal well in the broth, chop two or three pieces of chuijhal and keep the rest. By doing this, you will get the flavor of chuijhal in the broth, and also enjoy the fun of chewing chuijhal separately. can do."
  },
  {
    question: "What is the difference between trees and shrubs?",
    answer:<span>The trunk of Chuijhal tree is called Chuijhal. The bark of tree saplings is usually a little higher. The plant stays whole without melting in cooking. That is why the taste can be enjoyed only when it is chewed.
    <br />
    Chui Jhal The base of the plant and the thick or medium thick part adjacent to the base is called Ato Chui Jhal. Eto Chuizhale Jhal This Jhal is comparatively less but melts in cooking and brings out the gravy flavor. It softens when added to the curry, but imparts great flavor with the broth. Relatively low-salt and melt-in-the-cook, this Chuizhal is also quite tasty and tops everyone's list of favourites.</span>,
  },
  {
    question: "What is the difference between native and mountain Chuijhal?",
    answer:
      "Pahari Chuijhal is grown in the hilly regions of the country i.e. Chittagong, Rangamati hilly areas. Its color is brown or reddish white, takes a long time to cook, is not at all palatable and is hard like wood. Pahari Chuijal has no roots in its outer part whereas the desi The stems of chives are full of tiny roots and add a bit of flavor to the cooking and the crunchy rind.",
  },
  {
    question: "What are the medicinal properties of Chuizhale?",
    answer:
      "Chuijhal solves gastric problems and relieves constipation, improves appetite and is effective in reducing appetite. In addition, it reduces stomach and intestinal inflammation, relieves nervous tension and mental instability, reduces physical weakness and body pain. It helps like magic to reduce the body pain of new mothers quickly. Relieves cough, phlegm, asthma, shortness of breath, diarrhea and anemia. Chui Jhal also works well as a sleep aid.",
  },
  // More questions...
];

const Faq = () => {
  return (
    <div id="faq" className="my-28">
      <h1 className="text-3xl font-bold text-center text-green-500">
      Frequently Asked Questions
      </h1>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="mx-auto max-w-4xl divide-y divide-slate-200">
            <h1 className="divide-y divide-slate-200"></h1>
            <dl className="mt-10 space-y-6 divide-y divide-slate-200">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-slate-600">
                          <span className="text-xl font-semibold leading-7">
                            {faq.question}
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            {open ? (
                              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-minus" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /></svg>
                            ) : (
                              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base leading-7 text-slate-400 font-light">
                          {faq.answer}
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
