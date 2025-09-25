"use client";

import React from "react";
import MainLayout from "@/components/Layout/MainLayout";
import Link from "next/link";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Terms = () => {
  return (
    <MainLayout>
      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Terms and Conditions of Use Policy</h1>
          <p className="text-sm text-gray-600 italics">Last Updated: 15/09/2025</p>
        </div>

        {/* Introduction */}
        <section className="mb-8">
          <p className="mb-4">
            Thank you for choosing <strong>Jolo</strong>, your trusted digital platform for food delivery, market runs,
            and parcel services. By accessing or using the Jolo mobile application, website, or related services (the
            “Platform”), you (“you,” “your,” “User”) agree to comply with and be bound by these Terms and Conditions
            (“Terms”).
          </p>
          <p className="mb-4">
            Please read carefully before using the Platform. If you do not agree with these Terms, kindly refrain from
            using the Platform.
          </p>
        </section>

        {/* 1. Introduction & Scope of Services */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">1. Introduction & Scope of Services</h2>
          <p className="mb-4">
            Jolo (“we,” “our,” “us”) operates as a <strong>multi-service technology platform</strong> that connects
            Users to merchants, vendors, markets, and independent delivery agents. Through the Platform, Users can
            access:
          </p>

          <div className="mb-4">
            <h3 className="text-lg font-semibold">1. Market Runs</h3>
            <p className="mb-2">
              Request Jolo to <strong>purchase groceries and household items</strong> directly from markets or approved
              vendors.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>
                Jolo takes responsibility for <strong>verifying freshness, quality, and compliance</strong> at the point
                of acquisition.
              </li>
              <li>Once items are collected and handed over to delivery, risk of loss or damage passes to the User.</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold">2 Food Delivery</h3>
            <p className="mb-2">Order meals from restaurants and food vendors onboarded on the Platform.</p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>
                Jolo <strong>does not cook, manufacture, or package</strong> meals. Responsibility for food safety,
                quality, and compliance lies with the restaurant/vendor.
              </li>
              <li>Jolo facilitates the order and delivery connection between the User, restaurant, and rider.</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold">3 Parcel Services</h3>
            <p className="mb-2">Request pickup and delivery of parcels between locations within Jolo’s coverage.</p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>
                Jolo <strong>does not inspect, package, or assume liability</strong> for the contents of parcels.
              </li>
              <li>Users remain solely responsible for ensuring parcels are lawful, safe, and properly packaged.</li>
            </ul>
          </div>

          <p className="mt-4 italic text-red-600">
            <strong>⚠️ Disclaimer:</strong> Jolo is primarily a{" "}
            <strong>technology intermediary and logistics facilitator</strong>. We do not own, manufacture, or prepare
            goods. While Jolo ensures quality verification for Market Runs, all other responsibility rests with the
            originating merchant/vendor/sender.
          </p>
        </section>

        {/* 2. User Eligibility */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">2. User Eligibility</h2>
          <h3 className="text-lg font-semibold mt-4">2.1 Age Requirement</h3>
          <p className="mb-4">
            Access to and use of the Platform is limited to individuals who are{" "}
            <strong>at least eighteen (18) years of age</strong> or the legal age of majority in their jurisdiction of
            residence, whichever is higher. By creating an account or using the Platform, you represent and warrant that
            you meet this requirement.
          </p>

          <h3 className="text-lg font-semibold mt-4">2.2 Legal Capacity</h3>
          <p className="mb-4">
            By accessing the Platform, you represent and warrant that you possess the{" "}
            <strong>full legal capacity and authority</strong>
            to enter into, comply with, and be bound by these Terms. Users who are minors or otherwise lack legal
            capacity under applicable laws are strictly prohibited from using the Platform, unless such use is under the
            supervison of, and with the consent of, a parent or legal guardian who assumes full responsibility.
          </p>

          <h3 className="text-lg font-semibold mt-4">2.3 Business and Organizational Use</h3>
          <p className="mb-4">
            Where the Platform is accessed or used on behalf of a company, partnership, cooperative, or other legal
            entity, the individual acting represents and warrants that they are duly authorized to act on behalf of such
            entity, and to bind it to these Terms. In such cases, all references to “you” or “your” in these Terms shall
            include the applicable entity.
          </p>

          <h3 className="text-lg font-semibold mt-4">2.4 Verification Rights</h3>
          <p className="mb-4">Jolo reserves the right, in its sole discretion, to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Request supporting documentation to verify a User’s age, identity, and/or authority to act on behalf of a
              business.
            </li>
            <li>
              Suspend, restrict, or terminate any account where eligibility requirements are not satisfied or cannot be
              verified.
            </li>
          </ul>
        </section>

        {/* 3. Account Registration & Security */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">3. Account Registration & Security</h2>

          <h3 className="text-lg font-semibold mt-4">3.1 Registration Requirement</h3>
          <p className="mb-4">
            To access certain features of the Platform, you may be required to create and maintain a personal or
            business account. You agree to provide <strong>accurate, current, and complete information</strong> during
            registration and to promptly update such information as necessary.
          </p>

          <h3 className="text-lg font-semibold mt-4">3.2 Account Credentials</h3>
          <p className="mb-4">
            You are solely responsible for maintaining the confidentiality of your login details (username, password, or
            any authentication method). All activities conducted under your account shall be deemed authorized by you,
            whether or not undertaken by you personally.
          </p>

          <h3 className="text-lg font-semibold mt-4">3.3 User Responsibility</h3>
          <p className="mb-4">
            You accept full responsibility for all use of your account, including any misuse by third parties. You agree
            to notify Jolo immediately if you suspect any unauthorized access, compromise of your credentials, or misuse
            of your account.
          </p>
          <h3 className="text-lg font-semibold mt-4">3.4 Rights of Suspension/Termination</h3>
          <p className="mb-4">
            Jolo reserves the right, at its sole discretion, to suspend, restrict, or permanently terminate accounts
            where:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>False, inaccurate, or incomplete information has been provided;</li>
            <li>Account misuse, unauthorized activity, or suspicious conduct is detected; or</li>
            <li>There is a breach of these Terms or applicable law.</li>
          </ul>
        </section>

        {/* 4. Orders, Quality Assurance & Liability */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">4. Orders, Quality Assurance & Liability</h2>
          <h3 className="text-lg font-semibold mt-4">4.1 Market Runs (Groceries & Household Items)</h3>
          <p className="mb-4">
            (a) <strong>Quality Verification:</strong> Jolo will exercise <strong>reasonable commercial care </strong>to
            verify that purchased items are fresh, wholesome, and of market-acceptable quality at the time of purchase.
          </p>
          <p className="mb-4">
            (b) <strong>Limitations of Inspection</strong> Jolo’s quality checks are{" "}
            <strong>limited to visible, physical inspection.</strong> We do not warrant against hidden defects,
            contamination, or deterioration occurring post-purchase or after delivery
          </p>
          <p className="mb-4">
            (c) <strong>Transfer of Risk:</strong> Risk of loss, damage, or perishability passes to the User once items
            are delivered to the address provided. Jolo shall not be responsible for storage conditions, improper
            handling, or spoilage after delivery.
          </p>
          <h3 className="text-lg font-semibold mt-4">4.2 Food Delivery (Restaurant Orders)</h3>
          <p className="mb-4">
            (a) <strong>Intermediary Role:</strong> Jolo acts solely as a technology intermediary connecting Users to
            restaurants and independent delivery agents. Jolo neither prepares, cooks, nor packages meals
          </p>
          <p className="mb-4">
            (b) <strong>Restaurant Responsibility:</strong> All obligations regarding{" "}
            <strong>food quality, hygiene, safety, and compliance with applicable laws</strong> (e.g., NAFDAC, SON, or
            relevant health codes) rest exclusively with the restaurant. Jolo does not conduct quality inspections or
            guarantee meal standards.
          </p>
          <p className="mb-4">
            (c) <strong>Delivery Handling:</strong> Delivery agents are independent contractors. While Jolo facilitates
            connections, it bears no liability for
            <strong>spillage, tampering, delay, contamination, or mishandling</strong> that may occur in transit.
          </p>
          <h3 className="text-lg font-semibold mt-4">4.3 Parcel Services</h3>
          <p className="mb-4">
            (a) <strong>User Obligations:</strong> Users must ensure that parcels are{" "}
            <strong>safe, lawful, properly packaged, and accurately declared</strong> prior to handover to the delivery
            agent.
          </p>
          <p className="mb-4">
            (b) <strong>Prohibited Items:</strong> Users may not send items including (but not limited to):{" "}
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Firearms, ammunition, or explosives;</li>
            <li>Hazardous or flammable materials;</li>
            <li>Counterfeit, stolen, or infringing goods;</li>
            <li>Perishable foods, except where expressly permitted;</li>
            <li>Currency or negotiable instruments exceeding regulatory limits;;</li>
          </ul>

          <p className="mb-4">
            (c) <strong>Liability Disclaimer:</strong> Jolo assumes no responsibility for
            <strong>loss, theft, misdeclaration, misdelivery, or damage</strong> to parcels, whether caused by packaging
            defects, unlawful contents, or third-party mishandling. Responsibility remains solely with the User. agent.
          </p>
        </section>

        {/* 5. Payment & Pricing */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">5. Payments & Pricing</h2>
          <p className="mb-4">
            (a) <strong>Payment Requirement:</strong> All orders must be placed and paid for Jolo will exercise{" "}
            <strong>exclusively through the Jolo Platform.</strong> Direct cash or offline payments to merchants,
            riders, or agents are strictly at the User’s risk and not recognized by Jolo.
          </p>
          <p className="mb-4">
            (b) <strong>Accepted Methods:</strong> Payments may be made via
            <strong>debit/credit cards, digital wallets, bank transfers, or other payment gateways</strong> enabled on
            the Platform. By providing payment details, you authorize Jolo (or its third-party payment processors) to
            debit the full order value, including applicable taxes, delivery fees, and service charges.
          </p>
          <p className="mb-4">
            (c) <strong>Pricing Transparency:</strong> Prices displayed on the Platform represent the amount payable for
            the product or service, inclusive of statutory taxes (e.g., VAT, sales tax) and platform charges,
            <strong>unless expressly stated otherwise.</strong> Additional costs such as special handling, express
            delivery, or packaging may be displayed separately at checkout.
          </p>
          <p className="mb-4">
            (d) <strong>Dynamic Pricing:</strong> Market-based products (e.g., groceries, fresh produce) may fluctuate
            daily or weekly due to supply conditions. Jolo reserves the right to update prices at its discretion to
            reflect prevailing market conditions. Users will always be shown the final payable amount prior to
            confirmation.
          </p>
          <p className="mb-4">
            (e) <strong>Price Modifications:</strong> Jolo may revise prices, delivery fees, or service charges at any
            time. Such changes will apply only to future orders and will not affect already confirmed transactions
          </p>
          <p className="mb-4">
            (f) <strong>Failed or Unauthorized Payments:</strong>
            Where payments fail or are reversed due to insufficient funds, card issues, chargebacks, or suspected fraud,
            Jolo reserves the right to suspend the User’s account until resolution. Users remain liable for all
            outstanding amounts and may be referred to collections or legal recovery processes if unpaid.
          </p>
        </section>

        {/* 6. Delivery & Risk of Loss */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">6. Delivery & Risk of Loss</h2>
          <p className="mb-4">
            (a) <strong>Delivery Timelines:</strong> Any delivery timelines displayed on the Platform or communicated
            via notifications are
            <strong>estimates only.</strong> While Jolo endeavors to meet indicated timelines, deliveries may be delayed
            due to factors beyond Jolo’s reasonable control, including but not limited to traffic congestion, weather
            conditions, vendor readiness, government restrictions, or technical disruptions.
          </p>
          <p className="mb-4">
            (b) <strong>Risk Transfer:</strong> The risk of loss, damage, or deterioration of any order passes to the
            User upon
            <strong>successful delivery to the User’s designated address or collection point.</strong> Users are
            encouraged to inspect items promptly upon receipt.
          </p>
          <p className="mb-4">
            (c) <strong>Rider Responsibility:</strong> Delivery riders and independent logistics agents engaged through
            the Platform operate as
            <strong> independent contractors,</strong> not employees of Jolo. As such, Jolo shall not be held liable for
            acts or omissions of riders, including delay, spillage, mishandling, or miscommunication.
          </p>
          <p className="mb-4">
            (d) <strong>Dispute Mediation:</strong> Notwithstanding the foregoing, Jolo maintains a{" "}
            <strong>customer dispute resolution channel</strong> and will make reasonable efforts to mediate complaints
            between Users, riders, and merchants/vendors to ensure equitable outcomes where possible. Remedies may
            include credits, refunds (where permitted), or replacement orders at Jolo’s discretion.
          </p>
          <p className="mb-4">
            (e) <strong>Delivery Confirmation:</strong> Delivery is deemed complete once a rider marks the order as
            “delivered” on the Platform, supported by evidence such as a timestamp, geotag, or User acknowledgment
            (digital or physical).
          </p>
        </section>

        {/* 7. Returns, Refunds & Disputes */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">7. Returns, Refunds & Disputes</h2>
          <p className="mb-4">
            (a) <strong>Food & Groceries:</strong> <br /> Due to the <strong> perishable nature</strong> of food and
            grocery items, Jolo operates a <strong>strict no-return policy.</strong> All sales are final once delivery
            has been completed.
          </p>
          <div className="mb-4">
            (b) <strong>Refund Eligibility:</strong> Refunds or credits may only be considered in the following limited
            cases:
            <ul className="list-disc pl-6 space-y-2">
              <li>Where the wrong item was delivered.</li>
              <li>
                Where items are visibly damaged or defective at the point of delivery and such damage is reported to
                Jolo immediately via the Platform or customer service channels.
              </li>
            </ul>
          </div>

          <p className="mb-4">
            (c) <strong> Parcels:</strong> Once a parcel has been{" "}
            <strong>collected and delivered to the User’s designated recipient</strong>, no refunds, reversals, or
            liability shall apply to Jolo. Responsibility for correct packaging, lawful content, and completeness rests
            solely with the User.
          </p>

          <p className="mb-4">
            (d) <strong> Discretionary Remedies:</strong> Jolo may, at its <strong>sole discretion</strong>, issue
            refunds, credits, or replacement orders as a goodwill gesture. The issuance of such remedies does not
            constitute an admission of liability and shall not create a precedent for future claims.
          </p>
          <p className="mb-4">
            (e) <strong>Dispute Resolution:</strong> In the event of disputes relating to orders, Users are required to
            notify Jolo promptly. Disputes will be mediated through Jolo’s
            <strong> customer support and escalation process.</strong> Where unresolved, Users may pursue remedies under
            the <strong>Governing Law & Dispute Resolution provisions in these Terms.</strong>
          </p>
        </section>

        {/* 8. User Responsibilities */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">8. User Responsibilities</h2>
          <p className="mb-4">
            As a condition of using the Platform, you agree that you shall <strong>not:</strong>
          </p>
          <p className="mb-4">
            1. Provide <strong>false, misleading, or incomplete information</strong> during registration, order
            placement, or communications.
          </p>
          <p className="mb-4">
            2.Send or attempt to send <strong>restricted, prohibited, or illegal parcels</strong>, including but not
            limited to firearms, controlled substances, counterfeit goods, hazardous materials, or cash above regulated
            thresholds.
          </p>
          <p className="mb-4">
            3. Exploit or abuse <strong>promotions, pricing errors, or delivery services</strong>, including fraudulent
            chargebacks or multiple account creation.
          </p>
          <p className="mb-4">
            4. Interfere with, disrupt, or attempt to gain unauthorized access to the{" "}
            <strong>Platform’s systems, data, or security features.</strong>
          </p>
          <p className="mb-4">
            5. Harass, threaten, or abuse <strong>merchants, riders, or Jolo personnel,</strong> whether physically,
            verbally, or through digital means.
          </p>
          <p className="mb-4">
            6. Engage in any conduct that may damage Jolo’s<strong>reputation, goodwill, or operations.</strong>
          </p>

          <p className="mb-4">
            Violation of these responsibilities may result in <strong>suspension, termination, or legal </strong>action
            without prior notice.
          </p>
        </section>

        {/* 9. Privacy & Data Protection */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2"> 9. Privacy & Data Protection</h2>
          <p className="mb-4">
            (a) <strong> Data Governance:</strong> Your personal data is collected, processed, and stored in accordance
            with Jolo’s
            <strong>Privacy Policy</strong>, which complies with the{" "}
            <strong>Nigeria Data Protection Regulation (NDPR) 2019</strong>, as well as applicable international data
            protection standards where relevant.
          </p>

          <p className="mb-4">
            (b) <strong>Consent:</strong> By using the Platform, you expressly consent to Jolo’s collection, use, and
            processing of your personal data for purposes including account management, service delivery, fraud
            prevention, and compliance with regulatory obligations.
          </p>
          <p className="mb-4">
            (c) <strong>User Rights:</strong> Subject to applicable law, you have the right to request{" "}
            <strong>access, correction, deletion, or restriction of your data</strong> held by Jolo. Requests should be
            submitted in writing via Jolo’s designated data protection channels.
          </p>
          <p className="mb-4">
            (d) <strong>Security Measures:</strong> Jolo employs{" "}
            <strong>reasonable technical and organizational safeguards</strong> to protect your personal data against
            unauthorized access, disclosure, alteration, or destruction. However, no system is entirely secure, and Jolo
            disclaims liability for breaches arising from circumstances beyond its reasonable control.
          </p>
          <p className="mb-4">
            (e) <strong>Third-Party Sharing:</strong> Data may be shared with{" "}
            <strong>merchants, delivery agents, payment providers, and regulators</strong> strictly as necessary to
            facilitate transactions and comply with legal obligations. Jolo does not sell User data to third parties
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">10. Intellectual Property</h2>
          <p className="mb-4">
            (a) <strong>Ownership:</strong> All software, source code, algorithms, designs, text, images, graphics,
            audio, video, trademarks, service marks, logos, user interfaces, and other content made available through
            the Platform (collectively, “Intellectual Property”) remain the exclusive property of Jolo or its duly
            licensed third-party partners. Such rights are protected by Nigerian and international intellectual property
            laws.
          </p>
          <p className="mb-4">
            (b) <strong> License of Use:</strong> Users are granted a
            <strong>limited, revocable, non-exclusive, and non-transferable license</strong> to access and use the
            Platform strictly for lawful, <strong>personal and non-commercial purposes</strong> in accordance with these
            Terms.
          </p>
          <div className="mb-4">
            (c) <strong>Restrictions:</strong> Users shall not, without Jolo’s prior written consent:
            <ul className="list-disc pl-6 space-y-2">
              <li>Copy, reproduce, distribute, or create derivative works from any part of the Platform.</li>
              <li>Reverse engineer, decompile, or attempt to extract the source code of the Platform.</li>
              <li>
                Use Jolo’s trade names, logos, or branding in a manner that suggests endorsement or creates confusion.
              </li>
            </ul>
          </div>
          <p className="mb-4">
            Any unauthorized use constitutes a violation of these Terms and may result in legal action.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">11. Limitation of Liability</h2>
          <p className="mb-4">
            (a) <strong>“As-Is” Services:</strong> <br /> The Platform and services are provided on an{" "}
            <strong>“as is” and “as available” basis</strong>, without warranties of any kind, whether express, implied,
            or statutory.
          </p>
          <>
            (b) <strong>“As-Is” Services:</strong> <br />
            To the fullest extent permitted by law, Jolo expressly disclaims liability for:
            <ul className="list-decimal list-inside pl-6 space-y-2">
              <li>
                <strong>Food quality, hygiene, or safety,</strong> which remain the sole responsibility of the
                restaurant/vendor.
              </li>
              <li>
                <strong>Negligence, delay, or mishandling </strong> by independent riders or delivery agents.
              </li>
              <li>
                <strong>Parcel misdeclaration, unlawful contents, or prohibited goods</strong>, which remain the sole
                responsibility of the User.
              </li>
              <li>
                <strong>Indirect, incidental, consequential, or punitive damages</strong>, 4.including but not limited
                to lost profits, goodwill, or data.
              </li>
            </ul>
          </>
          <p className="mb-4">
            (c) <strong>Cap on Liability:</strong> <br /> Where liability is established by competent authority and
            attributable to Jolo, Jolo’s total aggregate liability to any User shall be strictly capped at the{" "}
            <strong>transaction value of the disputed order.</strong>
          </p>
        </section>

        {/* 12 Force and Majeure */}
        <section>
          <h2 className="text-2xl font-semibold mb-6"> 12. Force Majeure</h2>
          <p className="mb-4">
            Jolo shall not be held liable or deemed in breach of these Terms for any delay, interruption, or failure to
            perform obligations where such failure is caused, directly or indirectly, by events beyond its reasonable
            control, including but not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Acts of God (floods, earthquakes, storms).</li>
            <li>Epidemics, pandemics, or public health emergencies.</li>
            <li>Strikes, labor disputes, or industrial actions.</li>
            <li>Fire, explosions, or accidents.</li>
            <li>Government regulations, restrictions, or sanctions.</li>
            <li>Civil unrest, terrorism, or war.</li>
          </ul>
          <p className="mb-4">
            Performance shall be suspended for the duration of such events, with Jolo making reasonable efforts to
            resume services promptly thereafter.
          </p>
        </section>

        {/* 13 Indemnification */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">13. Indemnification</h2>
          <p className="mb-4">
            You agree to <strong>indemnify, defend, and hold harmless</strong> Jolo, its affiliates, officers,
            directors, employees, and agents against any and all claims, demands, losses, damages, liabilities,
            penalties, costs, or expenses (including reasonable legal fees) arising out of or related to:
          </p>
          <ul className="list-decimal list-inside pl-6">
            <li>Your use or misuse of the Platform.</li>
            <li>Any violation of these Terms.</li>
            <li>Any infringement or misappropriation of intellectual property or third-party rights by you.</li>
            <li>Any unlawful, fraudulent, or negligent act carried out by you or through your account.</li>
          </ul>
          <p className="mb-4">This indemnity obligation shall survive termination of your use of the Platform.</p>
        </section>

        {/* 14 Updates and Modification */}
        <section className="mb-4">
          <h2 className="text-2xl font-semibold mb-6">14. Updates & Modifications</h2>
          <p>
            Jolo reserves the right to update these Terms at any time. Updated versions will be published on the
            Platform with a revised “Last Updated” date. Continued use of the Platform constitutes acceptance.
          </p>
        </section>

        {/* 15. Governing Law & Dispute Resolution */}
        <section className="mb-4">
          <h2 className="text-2xl font-semibold mb-6"> 15. Governing Law & Dispute Resolution</h2>
          <ul className="list-disc py-6 pl-6 lit-inside">
            <li>
              These Terms are governed by the laws of the <strong>Federal Republic of Nigeria.</strong>
            </li>
            <li>Disputes shall first be resolved through good faith negotiations.</li>
            <li>
              nresolved disputes will be submitted to{" "}
              <strong>Mediation at the Lagos Multi-Door Courthouse (LMDC)</strong> in line with the Arbitration and
              Mediation Act (AMA) 2023.{" "}
            </li>
          </ul>
        </section>

        {/* 16. Contact Information */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">16. Contact Information</h2>
          <p className="mb-4">
            For inquiries, support, or complaints, you can reach us through the following channels:
          </p>

          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-2">
              <FiMail className="text-xl text-[var(--joloOrange)]" />
              <a href="mailto:support@jolo.ng" className="underline hover:opacity-80">
                support@jolo.ng
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FiPhone className="text-xl text-[var(--joloOrange)]" />
              <a href="tel:+2349137578052" className="hover:opacity-80">
                +234-913-757-8052
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FiMapPin className="text-xl text-[var(--joloOrange)]" />
              <span>2, Oyedele Ogunniyi Street, Anthony Village, Lagos</span>
            </li>
          </ul>
        </section>
      </article>
    </MainLayout>
  );
};

export default Terms;
