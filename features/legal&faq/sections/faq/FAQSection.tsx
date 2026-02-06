import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {Tabs, TabsList, TabsTrigger, TabsContent} from "@/components/ui/tabs";

export default function FAQSection() {
  return (
    <div>
      <Tabs defaultValue="faq" className="w-full">
        <TabsList>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
          <TabsTrigger value="legal">LEGAL</TabsTrigger>
        </TabsList>
        <TabsContent value="faq">
          <h1 className="text-center">FREQUENTLY ASKED QUESTIONS</h1>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>HOW DO I MAKE A RESERVATION</AccordionTrigger>
              <AccordionContent>
                Reservations can be made online through our reservation system,
                via email, or by phone. The respective restaurant manager will
                confirm availability upon request. Please note that your table
                will be held for 15 minutes beyond the scheduled arrival time.
                After this period, availability cannot be guaranteed. Any
                cancellations, late arrivals, or changes in guest count must be
                communicated at least 90 minutes prior to your reservation.
                During high-demand periods, such as holidays, special
                celebrations (e.g., Valentine’s Day), or busy weekends, a
                reservation deposit may be required, particularly for larger
                groups. If applicable, this will be communicated directly at the
                time of booking.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                CAN YOU ACCOMMODATE PRIVATE/CORPORATE EVENTS
              </AccordionTrigger>
              <AccordionContent>
                Shipping typically takes 5-7 business days within the
                continental United States. International shipping times may
                vary.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                CAN YOU ISSUE AN INVOICE ON MY COMPANY
              </AccordionTrigger>
              <AccordionContent>
                Yes, we offer 24/7 customer support through email and live chat.
                Our support team is here to help you with any questions or
                concerns you may have.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                DO YOU HAVE VEGETARIAN MEAL OPTIONS?
              </AccordionTrigger>
              <AccordionContent>
                We accept all major credit cards, PayPal, and Apple Pay. All
                payments are processed securely.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                DO YOU HAVE HIGHCHAIRS FOR MY CHILDREN?
              </AccordionTrigger>
              <AccordionContent>
                We accept returns within 30 days of purchase. Items must be in
                their original condition and packaging. Please contact our
                support team to initiate a return.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                CAN I BRING MY OWN CAKE FOR MY CELEBRATION?
              </AccordionTrigger>
              <AccordionContent>
                We accept returns within 30 days of purchase. Items must be in
                their original condition and packaging. Please contact our
                support team to initiate a return.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>DO YOU HAVE CORKAGE FEE?</AccordionTrigger>
              <AccordionContent>
                We accept returns within 30 days of purchase. Items must be in
                their original condition and packaging. Please contact our
                support team to initiate a return.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger>DO YOU HAVE VIP ROOMS?</AccordionTrigger>
              <AccordionContent>
                We accept returns within 30 days of purchase. Items must be in
                their original condition and packaging. Please contact our
                support team to initiate a return.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
              <AccordionTrigger>DO YOU HAVE FREE WIFI?</AccordionTrigger>
              <AccordionContent>
                We accept returns within 30 days of purchase. Items must be in
                their original condition and packaging. Please contact our
                support team to initiate a return.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10">
              <AccordionTrigger>
                CAN I CHANGE THE DATE OF MY PREPAID BOOKING?
              </AccordionTrigger>
              <AccordionContent>
                We accept returns within 30 days of purchase. Items must be in
                their original condition and packaging. Please contact our
                support team to initiate a return.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-11">
              <AccordionTrigger>
                DO YOU REQUIRE PREPAYMENT FOR RESERVATIONS?
              </AccordionTrigger>
              <AccordionContent>
                We accept returns within 30 days of purchase. Items must be in
                their original condition and packaging. Please contact our
                support team to initiate a return.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-12">
              <AccordionTrigger>
                CAN I GET A REFUND IF I CANCEL OR CANNOT ATTEND AFTER
                PREPAYMENT?
              </AccordionTrigger>
              <AccordionContent>
                We accept returns within 30 days of purchase. Items must be in
                their original condition and packaging. Please contact our
                support team to initiate a return.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-13">
              <AccordionTrigger>
                ARE YOUR MEAT PRODUCTS HALAL CERTIFIED?
              </AccordionTrigger>
              <AccordionContent>
                We accept returns within 30 days of purchase. Items must be in
                their original condition and packaging. Please contact our
                support team to initiate a return.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-14">
              <AccordionTrigger>
                WHAT ARE YOUR OPENING HOURS AND HOW ABOUT PARKING, OR ARRIVAL BY
                PUBLIC TRANSPORTATION?
              </AccordionTrigger>
              <AccordionContent>
                We accept returns within 30 days of purchase. Items must be in
                their original condition and packaging. Please contact our
                support team to initiate a return.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
        <TabsContent value="legal">
          <div className="space-y-4">
            <h1 className="text-center">Terms & Conditions</h1>
            <h4>USE OF ELGAUCHO.ASIA SITE</h4>
            <p className="font-light text-muted-foreground text-justify">
              The elgaucho.asia website (the “Site”) comprises of various web
              pages operated by Gaucho Co., Ltd and is provided to you free of
              charge for your personal use subject to these Terms and Conditions
              (“Terms”). By using the Site, you agree to be bound by these Terms
              and Conditions, which govern your use of elgaucho.asia Site and
              all services provided in connection with it.
            </p>
            <h4>BOOK A TABLE</h4>
            <p className="font-light text-muted-foreground text-justify">
              Please note that the restaurant will only be able to keep your
              reservation for additional 15 minutes after the booking time you
              requested and cannot guarantee the table availability afterwards.
              Cancellations, late arrival or change of number of guests are to
              be announced minimum 90 minutes prior to booking time. Please note
              that our private rooms require a minimum spend of 25.000.000 VND.
            </p>
            <h4>Promotional Offers </h4>
            <h4>All-Time Favorites</h4>
            <ul className="list-disc pl-5 space-y-2 font-light text-muted-foreground">
              <li>Complimentary glass of house wine or beer for each diner</li>
              <li>Available for lunch and dinner</li>
              <li>Not valid with other promotional offers</li>
            </ul>
            <h4>SUPER TUESDAY</h4>
            <ul className="list-disc pl-5 space-y-2 font-light text-muted-foreground">
              <li>50% off selected steaks</li>
              <li>Available for dinner only</li>
              <li>Not valid with other promotional offers</li>
            </ul>
            <h4>AMENDMENTS AND ASSIGNMENTS</h4>
            <p className="font-light text-muted-foreground text-justify">
              We may update these Terms from time to time and any changes will
              be fully visible and require your newly confirmation during
              transactions processed via the Site, which will then indicate your
              agreement to be bound by the new Terms. You may not assign or
              transfer these Terms, by operation of law or otherwise, without
              elgaucho.asia and its related entities prior written consent. Any
              attempt by you to assign or transfer these Terms, without such
              consent, will be null and of no effect. Elgaucho.eu and its
              related entities may assign or transfer these Terms, at its sole
              discretion, without restriction. Subject to the foregoing, these
              Terms will bind and insure to the benefit of the parties, their
              successors and permitted assigns.
            </p>
            <h4>REGISTRATION AND YOUR ACCOUNT</h4>
            <p className="font-light text-muted-foreground text-justify">
              To register with elgaucho.asia you must be over eighteen years of
              age. You must ensure that the details provided by you on
              registration or at any time are correct and complete. Using this
              Site, you are responsible for maintaining the confidentiality of
              your account and password and for restricting access to your
              computer, and you agree to accept responsibility for all
              activities that occur under your account or password. You may not
              assign or otherwise transfer your account to any other person or
              entity. You acknowledge that elgaucho.asia or its related entities
              are not responsible for third party access to your account that
              results from theft or misappropriation of your account.
              Elgaucho.eu and its associates reserve the right to refuse or
              cancel service, terminate accounts, or remove or edit content in
              our sole discretion.
            </p>
            <h4>COMMUNICATIONS AND EXCLUDED SERVICES</h4>
            <p className="font-light text-muted-foreground text-justify">
              The services provided by elgaucho.asia Site do not include the
              provision of computer or other necessary equipment to access the
              Site. To use the Site, you will require Internet connectivity and
              appropriate telecommunication links. We shall not be liable for
              any telephone or other costs that you may incur. Visiting the Site
              or sending emails to the Site constitutes electronic
              communications. You consent to receive electronic communications
              and you agree that all agreements, notices, disclosures and other
              communications that we provide to you electronically, via email
              and on the Site, satisfy any legal requirement that such
              communications be in writing.
            </p>
            <h4>INTELLECTUAL PROPERTY</h4>
            <p className="font-light text-muted-foreground text-justify">
              The content of elgaucho.asia Site is protected by copyright, trade
              marks, database and other intellectual property rights. You may
              retrieve and display the content of the Site on a computer screen,
              store such content in electronic form on disk (but not any server
              or other storage device connected to a network) or print one copy
              of such content for your own personal, non-commercial use,
              provided you keep intact all and any copyright and proprietary
              notices. You may not otherwise reproduce, modify, copy or
              distribute or use for commercial purposes any of the materials or
              content on the Site without written permission from us. No license
              is granted to you in these Terms and Conditions to use any trade
              mark of elgaucho.asia or its related entities.
            </p>
            <h4>LIMITATIONS</h4>
            <p className="font-light text-muted-foreground text-justify">
              You may not use the Site for any of the following purposes:
            </p>
            <ol className="list-decimal  pl-5 space-y-2 font-light text-muted-foreground">
              <li>
                Disseminating any unlawful, harassing, libellous, abusive,
                threatening, harmful, vulgar, obscene, or otherwise
                objectionable material.
              </li>
              <li>
                Transmitting material that encourages conduct that constitutes a
                criminal offence, results in civil liability, or otherwise
                breaches any relevant laws, regulations, or codes of practice.
              </li>
              <li>Gaining unauthorised access to other computer systems.</li>
              <li>
                Interfering with any other person’s use or enjoyment of the
                elgaucho.asia Site.
              </li>
              <li>
                Breaching any laws concerning the use of public
                telecommunications networks.
              </li>
              <li>
                Interfering with or disrupting networks or websites connected to
                the elgaucho.asia Site.
              </li>
              <li>
                Making, transmitting, or storing electronic copies of materials
                protected by copyright without the permission of the owner.
              </li>
              <li>
                Elgaucho.eu and its related entities reserve the right to refuse
                to post material on the Site or to remove material already
                posted.
              </li>
            </ol>
            <h4>INDEMNIFICATION</h4>
            <p className="font-light text-muted-foreground text-justify">
              You agree to indemnify, defend, and hold harmless elgaucho.asia
              and its related entities, including its officers, directors,
              employees, agents, and third parties, against any losses,
              liabilities, costs, and expenses (including reasonable attorneys’
              fees) reasonably suffered or incurred by us, as well as any
              damages awarded against us or settlement sums paid by us, arising
              out of or in connection with:
            </p>
            <ol className="list-decimal  pl-5 space-y-2 font-light text-muted-foreground">
              <li>
                Any claim by a third party that your use of the elgaucho.asia
                Site is defamatory, offensive, abusive, obscene, pornographic,
                illegal, or constitutes a breach of any applicable law,
                regulation, or code of practice.
              </li>
              <li>
                Any claim by a third party that your use of the elgaucho.asia
                Site infringes that third party's copyright or other
                intellectual property rights of any nature.
              </li>
              <li>
                Any fines or penalties imposed by a regulatory, advertising, or
                trading body or authority in connection with your use of the
                elgaucho.asia Site.
              </li>
            </ol>
            <h4>AVAILABILITY OF ELGAUCHO.ASIA SITE</h4>
            <p className="font-light text-muted-foreground text-justify">
              Although elgaucho.asia aims to offer you the best service
              possible, elgaucho.asia makes no promise that the services at
              elgaucho.asia Site will meet your requirements. Elgaucho.eu cannot
              guarantee that the service will be fault free. If a fault occurs
              in the service, you should report it to the Customer Services (see
              below for contact details) or by email below we will attempt to
              correct the fault as soon as we reasonably can. Your access to the
              elgaucho.asia Site may be occasionally restricted to allow for
              repairs, maintenance or the introduction of new facilities or
              services. elgaucho.asia will attempt to restore the service as
              soon as it reasonably can.
            </p>
            <p className="font-light text-muted-foreground text-justify">
              info.vietnam@elgaucho.asia
            </p>
            <p className="font-light text-muted-foreground text-justify">
              Info.thailand@elgaucho.asia
            </p>
            <h4>SUSPENSION OR CANCELLATION OF YOUR REGISTRATION</h4>
            <p className="font-light text-muted-foreground text-justify">
              Elgaucho.eu may suspend or cancel your registration immediately at
              our reasonable discretion or if you breach any of your obligations
              under these Terms and Conditions. You can cancel this agreement at
              any time by informing us in writing. If you do so, you must stop
              using elgaucho.asia Site. The suspension or cancellation of your
              registration and your right to use elgaucho.asia Site shall not
              affect either party's rights or liabilities and these Terms and
              Conditions shall survive cancellation. If for any reason beyond
              our reasonable control, we are unable to supply a particular item,
              we will not be liable to you. Please note that we will attempt to
              deliver substitute lines should selected lines be unavailable
              unless you request us not to do so.
            </p>
            <h4>LINKS TO THIRD PARTY SITES/THIRD PARTY SERVICES</h4>
            <p className="font-light text-muted-foreground text-justify">
              Elgaucho.eu may contain links to other websites ("Linked Sites").
              The Linked Sites are not under the control of elgaucho.asia or its
              related entities and elgaucho.asia, nor its related entities are
              responsible for the contents of any Linked Site, including without
              limitation any link contained in a Linked Site, or any changes or
              updates to a Linked Site. Elgaucho.eu is providing these links to
              you only as a convenience, and the inclusion of any link does not
              imply endorsement by elgaucho.asia of the site or any association
              with its operators. Certain services made available via
              elgaucho.asia are delivered by third party sites and organizations
              By using any product, service or functionality originating from
              the Site, you hereby acknowledge and consent that elgaucho.asia or
              its related entities may share such information and data with any
              third party with whom elgaucho.asia or its related entities has a
              contractual relationship to provide the requested product, service
              or functionality on behalf of the Site users and customers.
            </p>
            <h4>ELGAUCHO.ASIA'S LIABILITY</h4>
            <p className="font-light text-muted-foreground text-justify">
              The Site is provided by elgaucho.asia without any warranties or
              guarantees. You must bear the risks associated with the use of the
              Internet. The Site provides content from other Internet sites or
              resources and while elgaucho.asia tries to ensure that material
              included on the Site is correct, reputable and of high quality, it
              cannot accept responsibility if this is not the case.
              elgaucho.asia or its related entities will not be responsible for
              any errors or omissions or for the results obtained from the use
              of such information or for any technical problems you may
              experience with the Site. If elgaucho.asia or its related entities
              are informed of any inaccuracies in the material on the Site, we
              will attempt to correct the inaccuracies as soon as we reasonably
              can. In particular, we disclaim all liabilities in connection with
              the following:
            </p>
            <ul className="list-disc pl-5 space-y-2 font-light text-muted-foreground">
              <li>
                Incompatibility of the Site with any of your equipment, software
                or telecommunications links
              </li>
              <li>
                Technical problems including errors or interruptions of the Site
              </li>
              <li>Unsuitability, unreliability or inaccuracy of the Site</li>
              <li>Inadequacy of the Site to meet your requirements</li>
            </ul>
            <p className="font-light text-muted-foreground text-justify">
              To the full extent allowed by applicable law, you agree that we
              will not be liable to you/or any third party for any consequential
              or incidental damages (including but not limited to loss of
              revenue, loss of profits, loss of anticipated savings, wasted
              expenditure, loss of privacy and loss of data) or any other
              indirect, special or punitive damages whatsoever that arise out of
              or are related to elgaucho.asia Site. Nothing in this paragraph
              applies to elgaucho.asia or its related entities liability in
              respect of products sold through the Online Stores. Nothing in
              these Terms and Conditions shall exclude elgaucho.asia liability
              for personal injury or death caused by its negligence. Our
              acceptance of an order takes place on despatch of the order, at
              which point the purchase contract will be made and you will be
              charged for your order.
            </p>
            <h4>ADVERTISING AND SPONSORSHIP</h4>
            <p className="font-light text-muted-foreground text-justify">
              Part of the Site may contain advertising and sponsorship.
              Advertisers and Sponsors are responsible for ensuring that
              material submitted for inclusion on the Site complies with
              relevant laws and codes. We will not be responsible for any error
              or inaccuracy in advertising and sponsorship material.
            </p>
            <h4>APPLICABLE LAW AND AREA OF SERVICE</h4>
            <p className="font-light text-muted-foreground text-justify">
              The Service is controlled, operated and administered by
              elgaucho.asia and its related entities from the offices within Ho
              Chi Minh City. The service is only available for those who reside
              in Vietnam. These Terms and Conditions shall be governed by and
              construed in accordance with the laws of the Socialist Republic Of
              Vietnam and any disputes will be decided only by the Socialist
              Republic Of Vietnam courts.
            </p>
            <h4>DELIVERY</h4>
            <p className="font-light text-muted-foreground text-justify">
              You agree to indemnify, defend and hold harmless elgaucho.asia and
              its related entities, its officers, directors, employees, agents
              and third parties, for any losses, costs, liabilities and expenses
              (including reasonable attorneys' fees) relating to or arising out
              of your use of or inability to use the Site or services, any user
              postings made by you, your violation of any terms of this
              Agreement or your violation of any rights of a third party, or
              your violation of any applicable laws, rules or regulations.
              Elgaucho.eu and its related entities reserve the right, at its own
              cost, to assume the exclusive defense and control of any matter
              otherwise subject to indemnification by you, in which event you
              will fully cooperate with Elgaucho.eu and its related entities in
              asserting any available defenses. Delivery will be made to the
              address specified by you on the completed order form. Whilst we
              make every effort to deliver your goods within 48 hours or as
              otherwise agreed, we will not be liable if we fail to do so due to
              circumstances beyond our control.
            </p>
            <h4>PAYMENT</h4>
            <p className="font-light text-muted-foreground text-justify">
              You agree to indemnify, defend and hold harmless elgaucho.asia and
              its related entities, its officers, directors, employees, agents
              and third parties, for any losses, costs, liabilities and expenses
              (including reasonable attorneys' fees) relating to or arising out
              of your use of or inability to use the Site or services, any user
              postings made by you, your violation of any terms of this
              Agreement or your violation of any rights of a third party, or
              your violation of any applicable laws, rules or regulations.
              Elgaucho.eu and its related entities reserve the right, at its own
              cost, to assume the exclusive defense and control of any matter
              otherwise subject to indemnification by you, in which event you
              will fully cooperate with Elgaucho.eu and its related entities in
              asserting any available defenses. You can pay by any credit card
              listed in the payment options, while your credit card details will
              be encrypted to minimise the possibility of unauthorised access or
              disclosure. Authority for payment must be given at the time of
              placing your order. Our liability to you in connection with any
              order will not exceed the total price charged for the relevant
              items.
            </p>
            <h4>RETURN</h4>
            <p className="font-light text-muted-foreground text-justify">
              You agree to indemnify, defend and hold harmless elgaucho.asia and
              its related entities, its officers, directors, employees, agents
              and third parties, for any losses, costs, liabilities and expenses
              (including reasonable attorneys' fees) relating to or arising out
              of your use of or inability to use the Site or services, any user
              postings made by you, your violation of any terms of this
              Agreement or your violation of any rights of a third party, or
              your violation of any applicable laws, rules or regulations.
              Elgaucho.eu and its related entities reserve the right, at its own
              cost, to assume the exclusive defense and control of any matter
              otherwise subject to indemnification by you, in which event you
              will fully cooperate with Elgaucho.eu and its related entities in
              asserting any available defenses. We are committed to providing
              our valued customers with high-quality meat. However, we do
              understand sometimes refund requests may be made. This policy sets
              out circumstances in which we may provide refunds in respect of a
              specific issue, at our absolute discretion. We will gladly replace
              or refund incorrect products delivered/received while we will not
              issue refunds for change of mind or incorrect product choice. With
              the acceptance of products at delivery, no later replacement or
              refund is applicable or will be processed. In order to accept
              returns for products/items, you need to notify us in writing
              directly at delivery, no later point in time will be accepted.
            </p>
            <h4>GENERAL PRODUCT TERMS AND CONDITIONS</h4>
            <p className="font-light text-muted-foreground text-justify">
              El Gaucho reserves the right to modify menu items, pricing,
              product availability, and other related details at any time
              without prior notice. You agree to indemnify, defend and hold
              harmless elgaucho.asia and its related entities, its officers,
              directors, employees, agents and third parties, for any losses,
              costs, liabilities and expenses (including reasonable attorneys'
              fees) relating to or arising out of your use of or inability to
              use the Site or services, any user postings made by you, your
              violation of any terms of this Agreement or your violation of any
              rights of a third party, or your violation of any applicable laws,
              rules or regulations. Elgaucho.eu and its related entities reserve
              the right, at its own cost, to assume the exclusive defense and
              control of any matter otherwise subject to indemnification by you,
              in which event you will fully cooperate with elgaucho.asia and its
              related entities in asserting any available defenses. These Terms
              shall be governed by and construed in accordance with the laws of
              the Socialist Republic Of Vietnam and any disputes will be decided
              only by the Socialist Republic Of Vietnam courts. You may not
              assign, sub-license or otherwise transfer any of your rights under
              these Terms and Conditions. If any provision of these Terms and
              Conditions is found to be invalid by any court having competent
              jurisdiction, the invalidity of that provision will not affect the
              validity of the remaining provisions of these Terms and
              Conditions, which shall remain in full force and effect. If you
              breach these Terms and Conditions and elgaucho.asia and its
              related entities ignores this, elgaucho.asia and its related
              entities will still be entitled to use its rights and remedies at
              a later date or in any other situation where you breach the Terms
              and Conditions. Elgaucho.asia or its related entities shall not be
              responsible for any breach of these Terms and Conditions caused by
              circumstances beyond its control.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
