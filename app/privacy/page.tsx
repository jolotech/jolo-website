import React from "react";
import MainLayout from "@/components/Layout/MainLayout";

const PrivacyPolicy = () => {
  return (
    <MainLayout>
      <article className="max-w-5xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-8 items-center text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy – Jolo</h1>
          <p className="text-sm mb-4">
            <strong>Effective Date:</strong> 25/9/2025 <br /> <strong>Last Updated:</strong> 25/9/2025
          </p>
          <p className="mt-4 text-base text-left mb-4">
            This Privacy Policy explains how Jolo Technologies Limited (“Jolo”, “we”, “our”, “us”) collects, uses,
            shares, and protects your personal data when you use our website, mobile application, and related services
            (the “Services”).
          </p>
          <p>
            By using our Services, you consent to the practices described in this Privacy Policy, in line with the{" "}
            <strong>Nigerian Data Protection Act (NDPA) 2023, NDPR,</strong>
            and other applicable data protection laws.
          </p>
        </header>

        {/* SECTION 1 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Scope of This Privacy Policy</h2>
          <p className="mb-4">This Policy applies to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Customers/Users</strong> ordering food, groceries, or sending parcels.
            </li>
            <li>
              <strong>Vendors/Restaurants</strong> listing meals and fulfilling customer orders.
            </li>
            <li>
              <strong>Riders/Delivery Partners</strong> who pick up and deliver orders/parcels.
            </li>
            <li>
              <strong>Visitors</strong> to the Jolo website or mobile application.
            </li>
          </ul>
        </section>

        {/* SECTION 2 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Data We Collect About You</h2>

          {/* Subsection A */}
          <div className="mb-6">
            <p className="mb-4">
              When you use Jolo’s Services, we collect different categories of personal data depending on whether you
              are a <strong>customer, vendor/restaurant, or rider/delivery partner.</strong>
            </p>
            <h3 className="text-xl font-medium mb-2">A. Information You Provide Directly</h3>
            {/* Customers */}
            <div className="mb-4">
              <h4 className="font-semibold mb-4">1. For Customers/Users:</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Identity Data:</strong> Full name, gender, date of birth (optional), email address, etc.
                </li>
                <li>
                  <strong>Contact Data:</strong> Phone number, email address, delivery addresses, etc.
                </li>
                <li>
                  <strong>Account Data:</strong> Username, password, profile picture (if uploaded), order history.
                </li>
                <li>
                  <strong>Payment & Financial Data:</strong> Debit/credit card details, bank account information
                  (processed securely through third-party processors), wallet/balance information within the Jolo app
                </li>
                <li>
                  <strong>Support & Feedback Data:</strong> Information you provide when contacting customer support,
                  reporting issues, or filling out surveys.
                </li>
              </ul>
            </div>

            {/* 2 Vendors */}
            <div className="mb-4">
              <h4 className="font-semibold mb-4">2. For Vendors/Restaurants:</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Business Identity Data:</strong> Registered business name, CAC certificate/incorporation
                  documents, TIN (Tax Identification Number).
                </li>
                <li>
                  <strong>Contact Data:</strong> Official business address, contact number, business email,
                  representative/manager’s name.
                </li>
                <li>
                  <strong>Banking & Settlement Data:</strong> Bank account information for payouts, proof of ownership.
                </li>
                <li>
                  <strong>Menu & Inventory Data:</strong> Information on listed products, pricing, promotional
                  materials, photos/videos provided to Jolo.
                </li>
              </ul>
            </div>

            {/* 3 for Riders/Delivary Partners */}
            <div className="mb-4">
              <h4 className="font-semibold mb-4">3.For Riders/Delivery Partners:</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Identity Data:</strong> Full name, NIN (for verification).
                </li>
                <li>
                  <strong>Contact Data:</strong>Phone number, address, emergency contact details.
                </li>
                <li>
                  <strong>Verification Data:</strong>Driver’s license, vehicle particulars, proof of insurance,
                  guarantor details.
                </li>
                <li>
                  <strong>Banking Data:</strong> Account details for payment/settlement of delivery earnings.
                </li>
                <li>
                  <strong>Employment/Onboarding Data:</strong> Background checks, training records, agreements signed
                  with Jolo.
                </li>
              </ul>
            </div>
          </div>

          {/* Subsection B */}
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2">B. Information We Collect Automatically</h3>
            <p className="mb-2">
              When you interact with Jolo’s app, website, or rider platform, we automatically collect:
            </p>
            {/* Customers */}
            <div className="mb-4">
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Device Information:</strong> IP address, device type, browser type, operating system, unique
                  device identifiers, app version.
                </li>
                <li>
                  <strong>Usage Information:</strong>
                  <ul className="list-[circle] pl-6 space-y-1">
                    <li> Pages/screens visited within the app.</li>
                    <li>Search history (e.g., groceries searched, restaurants browsed).</li>
                    <li>Clickstream data (buttons tapped, navigation flow).</li>
                    <li>Order preferences (frequently ordered items, delivery frequency).</li>
                  </ul>
                </li>

                <li>
                  <strong>Location Information:</strong>
                  <ul className="list-[circle] pl-6 space-y-1">
                    <li>
                      {" "}
                      Real-time GPS location (when enabled) to:
                      <ul className="list-[square] pl-6 space-y-1">
                        <li>Deliver accurate rider tracking.</li>
                        <li>Estimate delivery times.</li>
                        <li>Match you to nearby vendors/riders.</li>
                      </ul>
                    </li>
                    <li>Delivery address coordinates saved for future orders.</li>
                  </ul>
                </li>
                <li>
                  <strong>Transaction Data:</strong> Time, date, and details of orders placed, cancellations, refunds,
                  and promotional codes used.
                </li>
                <li>
                  <strong>Performance & Analytics Data:</strong> App crash logs, error reports, and usage statistics for
                  service improvement.
                </li>
              </ul>
            </div>
          </div>

          {/* Subsection C */}
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2">C. Information From Third Parties</h3>
            <p className="mb-2">We may receive additional personal data from trusted third-party sources, including:</p>
            <div>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Payment Partners & Banks:</strong> Confirmation of successful transactions, fraud alerts,
                  chargeback information.
                </li>
                <li>
                  {" "}
                  <strong>Logistics & Verification Partners:</strong> Identity validation (e.g., NIN verification),
                  background checks for riders, address verification for vendors.
                </li>
                <li>
                  <strong>Marketing & Advertising Partners:</strong> Insights into customer engagement with Jolo’s ads
                  (clicks, impressions, conversions).
                </li>
                <li>
                  {" "}
                  <strong>Public/External Sources:</strong>
                  <ul className="list-[circle] pl-6 space-y-1">
                    <li>Social media (if you interact with Jolo ads, campaigns, or accounts).</li>
                    <li>Public directories (to verify vendor registration or contact info).</li>
                  </ul>
                </li>
                <li>
                  <strong>Corporate Partners:</strong> If you use Jolo through workplace/community programs, we may
                  receive your details from such organizations.
                </li>
              </ul>
            </div>
          </div>

          {/* 3. Why we collect your Data */}
          <section className="my-8">
            <h2 className="text-2xl font-semibold mb-4">3. Why We Collect Your Data</h2>
            <div className="overflow-x-auto">
              <table className="w-full border border-black border-collapse text-left">
                <thead>
                  <tr>
                    <th className="border border-black px-4 py-2 font-semibold w-1/4">Purpose of Processing</th>
                    <th className="border border-black px-4 py-2 font-semibold w-2/4">Details of Use</th>
                    <th className="border border-black px-4 py-2 font-semibold w-1/4">Lawful Basis</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-black px-4 py-2 align-top">Account creation and management</td>
                    <td className="border border-black px-4 py-2 align-top">
                      To register customers, vendors, and riders on the Jolo platform; store profile, login credentials,
                      preferences.
                    </td>
                    <td className="border border-black px-4 py-2 align-top">Performance of contract</td>
                  </tr>
                  <tr>
                    <td className="border border-black px-4 py-2 align-top">Identity and verification checks</td>
                    <td className="border border-black px-4 py-2 align-top">
                      To verify riders’ licenses, vendors’ CAC registration, guarantor details, NIN/BVN (if applicable).
                    </td>
                    <td className="border border-black px-4 py-2 align-top">Legal obligation / Legitimate interest</td>
                  </tr>
                  <tr>
                    <td className="border border-black px-4 py-2 align-top">Order processing and fulfillment</td>
                    <td className="border border-black px-4 py-2 align-top">
                      To receive, process, and deliver customer orders; to share order details with vendors and riders.
                    </td>
                    <td className="border border-black px-4 py-2 align-top">Performance of contract</td>
                  </tr>
                  <tr>
                    <td className="border border-black px-4 py-2 align-top">Payment processing and settlements</td>
                    <td className="border border-black px-4 py-2 align-top">
                      To process customer payments securely; to transfer payouts to vendors and riders; to handle
                      refunds or disputes.
                    </td>
                    <td className="border border-black px-4 py-2 align-top">
                      Performance of contract / Legal obligation
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-black px-4 py-2 align-top">Delivery tracking and logistics</td>
                    <td className="border border-black px-4 py-2 align-top">
                      To provide real-time GPS tracking of riders; to optimize route and delivery times.
                    </td>
                    <td className="border border-black px-4 py-2 align-top">
                      Performance of contract / Legitimate interest
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-black px-4 py-2 align-top">Customer support and dispute resolution</td>
                    <td className="border border-black px-4 py-2 align-top">
                      To respond to inquiries, complaints, or refund requests.
                    </td>
                    <td className="border border-black px-4 py-2 align-top">
                      Performance of contract / Legitimate interest
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-black px-4 py-2 align-top">Personalization and recommendations</td>
                    <td className="border border-black px-4 py-2 align-top">
                      To recommend groceries, restaurants, or services based on order history and preferences.
                    </td>
                    <td className="border border-black px-4 py-2 align-top">Legitimate interest</td>
                  </tr>

                  <tr>
                    <td className="border border-black px-4 py-2 align-top">Promotions and marketing</td>
                    <td className="border border-black px-4 py-2 align-top">
                      To send promotional messages, offers, loyalty programs, and campaigns (via SMS, email, push
                      notifications).
                    </td>
                    <td className="border border-black px-4 py-2 align-top">Consent</td>
                  </tr>

                  <tr>
                    <td className="border border-black px-4 py-2 align-top">Fraud detection and prevention</td>
                    <td className="border border-black px-4 py-2 align-top">
                      To identify and prevent fraudulent transactions, fake accounts, misuse of promotions, and
                      suspicious activities.
                    </td>
                    <td className="border border-black px-4 py-2 align-top">Legal obligation / Legitimate interest</td>
                  </tr>

                  <tr>
                    <td className="border border-black px-4 py-2 align-top">Security and platform integrity</td>
                    <td className="border border-black px-4 py-2 align-top">
                      To monitor for account breaches, delivery fraud, or misuse of services.
                    </td>
                    <td className="border border-black px-4 py-2 align-top">Legitimate interest</td>
                  </tr>

                  <tr>
                    <td className="border border-black px-4 py-2 align-top">Compliance with laws</td>
                    <td className="border border-black px-4 py-2 align-top">
                      To comply with AML, tax, and financial reporting requirements; to respond to law enforcement
                      requests.
                    </td>
                    <td className="border border-black px-4 py-2 align-top">Legal obligation</td>
                  </tr>

                  <tr>
                    <td className="border border-black px-4 py-2 align-top">Analytics and service improvement</td>
                    <td className="border border-black px-4 py-2 align-top">
                      To analyze app/website usage, order patterns, and feedback; to enhance efficiency and develop new
                      features.
                    </td>
                    <td className="border border-black px-4 py-2 align-top">Legitimate interest</td>
                  </tr>

                  <tr>
                    <td className="border border-black px-4 py-2 align-top">Research and development</td>
                    <td className="border border-black px-4 py-2 align-top">
                      To test new services, run pilots, and assess potential business models using anonymized/aggregated
                      data.
                    </td>
                    <td className="border border-black px-4 py-2 align-top">Legitimate interest</td>
                  </tr>

                  <tr>
                    <td className="border border-black px-4 py-2 align-top">Legal claims and rights</td>
                    <td className="border border-black px-4 py-2 align-top">
                      To establish, exercise, or defend against legal claims.
                    </td>
                    <td className="border border-black px-4 py-2 align-top">Legitimate interest / Legal Obligation</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 4. How We use yout Data */}
          <section className="my-8">
            <h2 className="text-2xl font-semibold mb-4">4. How We Use Your Data</h2>
            <p>
              We use the information we collect for various purposes depending on whether you are a
              <strong> customer, vendor/restaurant, or rider/delivery partner.</strong> Our use of your personal data
              ensures that Jolo can provide safe, reliable, and seamless services.
            </p>

            {/* SubSection A */}
            <div className="my-6">
              <h4 className="font-semibold mb-4">A. For Customers/Users</h4>
              <p className="mb-2">We use your data to:</p>
              <ul className="list-disc py-6 space-y-1">
                <li>
                  <strong>Account Creation & Verification: </strong> Register your Jolo account, verify your identity
                  (including optional NIN/BVN where required by law), and secure login.
                </li>
                <li>
                  <strong>Order Processing & Delivery:</strong>
                  <ul className="list-[circle] py-6 space-y-1">
                    <li>Match your orders with relevant vendors and riders.</li>
                    <li>Confirm, prepare, and deliver your purchases to your chosen address.</li>
                    <li>Provide real-time tracking of your rider/delivery.</li>
                  </ul>
                </li>
                <li>
                  <strong>Payment Processing:</strong>
                  <ul className="list-[circle] py-6 space-y-1">
                    <li>Facilitate secure payments via cards, bank transfers, or wallet balance.</li>
                    <li>Process refunds, discounts, and promotional credits.</li>
                  </ul>
                </li>
                <li>
                  <strong>Customer Support:</strong>
                  <ul className="list-[circle] py-6">
                    <li>Resolve complaints and disputes.</li>
                    <li>Provide order status updates and respond to inquiries.</li>
                  </ul>
                </li>
                <li>
                  <strong>Personalization:</strong>
                  <ul className="list-[circle]">
                    <li>Recommend vendors, groceries, or restaurants based on past orders.</li>
                    <li>Save delivery addresses and preferences for faster checkout.</li>
                  </ul>
                </li>
                <li>
                  <strong>Communication:</strong>
                  <ul className="list-[circle]">
                    <li>Send service-related updates (order confirmations, delivery status, account alerts).</li>
                    <li>Share marketing offers, discounts, or promotions (only if you have opted-in).</li>
                  </ul>
                </li>
                <li>
                  <strong>Safety & Security:</strong>
                  <ul className="list-[circle]">
                    <li>Detect fraudulent orders or suspicious account activity.</li>
                    <li>Protect against unauthorized transactions.</li>
                  </ul>
                </li>

                <li>
                  <strong>Service Improvement:</strong>
                  <ul className="list-[circle]">
                    <li>
                      Analyze purchase history, app usage, and feedback to improve recommendations, delivery times, and
                      platform performance.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* SubSection B For Vendors/Restaurants */}
            <div className="my-6">
              <h4 className="font-semibold mb-4">B. For Vendors/Restaurants</h4>
              <p className="mb-2">We use your data to:</p>
              <div>
                <ul className="list-disc py-6 space-y-1">
                  <li>
                    <strong>Onboarding & Verification: </strong>Confirm business registration, CAC documents, tax
                    details, and authorized representatives.
                  </li>
                  <li>
                    <strong>Order Fulfilment:</strong>Share customer order details (name, items, delivery address) so
                    you can prepare the order accurately.
                  </li>
                  <li>
                    <strong>Payments & Settlements: </strong>Process and transfer payouts to your linked bank account.
                  </li>
                  <li>
                    <strong>Inventory & Menu Management: </strong>Store your product/menu listings, promotions, and
                    availability for customers to browse.
                  </li>
                  <li>
                    <strong>Support & Communication:</strong>Contact you about disputes, refunds, or service
                    improvements.
                  </li>
                  <li>
                    <strong>Performance Analytics: </strong>Provide insights on sales, order volume, customer ratings,
                    and platform engagement.
                  </li>
                  <li>
                    <strong>Compliance & Security: </strong>Prevent fake vendor accounts, monitor fraudulent activities,
                    and ensure service quality standards.
                  </li>
                </ul>
              </div>
            </div>

            {/* SubSection C For Riders/Delivery Partners*/}
            <div>
              <h4 className="font-semibold mb-4">C. For Riders/Delivery Partners</h4>
              <p className="mb-2">We use your data to:</p>
              <div className="mb-2">
                <ul className="list-disc py-6 space-y-1">
                  <li>
                    <strong>Onboarding & Verification:</strong> Validate your identity, driver’s license, vehicle
                    information, guarantor details, and background checks.
                  </li>
                  <li>
                    <strong>Job Allocation:</strong> Match you with nearby delivery requests based on your real-time
                    location and availability.
                  </li>
                  <li>
                    <strong>Navigation & Tracking: </strong> Enable GPS navigation and allow customers/vendors to track
                    deliveries in real-time.
                  </li>
                  <li>
                    <strong>Payments & Earnings: </strong> Process delivery fees and transfer earnings to your linked
                    bank account or wallet.
                  </li>
                  <li>
                    <strong>Support & Dispute Resolution:</strong> Investigate complaints, accidents, or payment
                    disputes involving deliveries.
                  </li>
                  <li>
                    <strong>Safety & Security: </strong> Monitor fraudulent rider accounts or misuse of the platform.
                  </li>
                  <li>
                    <strong>Performance Monitoring: </strong> Track delivery ratings, completion rates, and response
                    times to improve service standards.
                  </li>
                </ul>
              </div>
            </div>

            {/* SubSection D For All Users */}
            <div>
              <h4 className="font-semibold mb-4">D. For All Users (Customers, Vendors, Riders)</h4>
              <p className="mb-2">We also use your data across the platform to:</p>
              <div className="mb-2">
                <ul className="list-disc py-6 space-y-1">
                  <li>
                    <strong>Improve Platform Performance:</strong> Analyze app usage, crashes, and service bottlenecks
                    to optimize performance.
                  </li>
                  <li>
                    <strong>Fraud Prevention & Security:</strong> : Detect unusual activity, prevent account takeovers,
                    and ensure safe transactions.
                  </li>
                  <li>
                    <strong>Legal & Regulatory Compliance: </strong>
                    <ul className="list-[circle] py-6">
                      <li>Fulfill obligations under financial regulations (AML/KYC, tax laws).</li>
                      <li>Respond to legal requests or law enforcement inquiries.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Marketing & Engagement (with consent): </strong> Share updates, discounts, loyalty programs,
                    and campaigns that may interest you.
                  </li>
                  <li>
                    <strong>Research & Development: </strong> Use aggregated/anonymized data to test new features,
                    services, and partnerships.
                  </li>
                </ul>
              </div>
            </div>

            {/**/}
          </section>

          {/* Section 5 of the privacy Pilicy */}
          <section>
            <div>
              <h2 className="text-2xl font-semibold mb-4">5. Cookies & Tracking Technologies</h2>

              <p className="mb-2">We use cookies and similar tools to:</p>
              <ul className="list-disc py-6 space-y-1">
                <li>Keep you logged in,</li>
                <li>Personalize your browsing experience,</li>
                <li> Track service usage for analytics and improvement.</li>
              </ul>
              <p className="mb-1">
                You can disable cookies in your browser settings, but some features may not work properly.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <div>
              <h2 className="text-2xl font-semibold mb-4">6. How We Share Your Data</h2>
              <p className="mb-2">We do not sell your personal data. We may share your information as follows:</p>
              <div>
                <ul className="list-disc py-6 space-y-1">
                  <li>
                    <strong>With Vendors/Restaurants: </strong> Limited details such as your name, order, and delivery
                    address to fulfill your request.
                  </li>
                  <li>
                    <strong>With Riders/Delivery Partners:</strong> Your name, delivery address, and contact number so
                    they can complete the delivery.
                  </li>
                  <li>
                    <strong>With Service Providers:</strong> Payment processors, IT/cloud hosting, identity verification
                    services.
                  </li>
                  <li>
                    <strong>With Regulators/Authorities:</strong> To comply with laws, regulations, or law enforcement
                    requests.
                  </li>
                  <li>
                    <strong>With Group Entities: </strong> If applicable, within Jolo’s group for business operations.
                  </li>
                  <li>
                    <strong>During Business Restructuring: </strong>If Jolo undergoes a merger, acquisition, or
                    restructuring (with notice to you).
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* section 7 */}
          <section>
            <div>
              <h2 className="text-2xl font-semibold mb-4">7. Cross-Border Data Transfers</h2>
              <p>
                If personal data is processed outside Nigeria, we ensure compliance with NDPA and use safeguards such as
                contractual protections to secure your information.
              </p>
            </div>
          </section>

          {/* Section 8 Data Security */}
          <section>
            <div>
              <h2 className="text-2xl font-semibold mb-4">8. Data Security</h2>
              <p className="mb-2">
                We take the security of your personal data seriously and implement a combination of{" "}
                <strong> technical, organizational, and administrative safeguards </strong> to reduce risks of loss,
                misuse, unauthorized access, disclosure, or alteration.
              </p>
            </div>
            <div className="mb-2">
              <p className="mb-2">Our security measures include:</p>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  <strong>Encryption and Data Protection</strong>
                  <ul className="list-[circle] list-inside space-y-2">
                    <li>
                      End-to-end encryption of sensitive information (e.g., payment details) during transmission using
                      SSL/TLS.
                    </li>
                    <li>
                      Storage of passwords and authentication data using industry-standard hashing and encryption
                      techniques.
                    </li>
                    <li>
                      Tokenization of payment and card information, processed only by certified third-party payment
                      providers.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Access Controls</strong>
                  <ul className="list-[circle] list-inside space-y-2">
                    <li>
                      Strict role-based access to ensure only authorized personnel can view or handle personal data.
                    </li>
                    <li>Multi-factor authentication for internal systems and staff accounts.</li>
                    <li>Regular monitoring and logging of system access.</li>
                  </ul>
                </li>

                <li>
                  <strong>System Monitoring & Testing</strong>
                  <ul className="list-[circle] list-inside space-y-2">
                    <li>Continuous monitoring of our platforms for vulnerabilities and potential breaches.</li>
                    <li>Routine penetration testing, vulnerability assessments, and security audits.</li>
                    <li>Automated alerts for suspicious or unusual account activity.</li>
                  </ul>
                </li>

                <li>
                  <strong>Organizational Safeguards</strong>
                  <ul className="list-[circle] list-inside space-y-2">
                    <li>
                      Confidentiality agreements and mandatory data protection training for all employees, vendors, and
                      riders with access to user data.
                    </li>
                    <li>Clear internal policies on handling, sharing, and storing personal data.</li>
                    <li>Vendor due diligence before onboarding third-party service providers.</li>
                  </ul>
                </li>

                <li>
                  <strong>Incident Response & Breach Management</strong>
                  <ul className="list-[circle] list-inside space-y-2">
                    <li>
                      A defined incident response plan to quickly investigate, contain, and resolve security incidents.
                    </li>
                    <li>
                      Immediate notification to users and regulators where legally required in case of a data breach.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>User Responsibility</strong>
                  <ul className="list-[circle] list-inside space-y-2">
                    <li>While we maintain strong security controls, no system is 100% secure.</li>
                    <li>
                      Users are responsible for protecting their login credentials, using strong passwords, and keeping
                      devices updated.
                    </li>
                    <li>
                      We encourage reporting of any suspected unauthorized access to our support team immediately.
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </section>

          {/* Section 9 Data Retention */}
          <section>
            <div>
              <h2 className="text-2xl font-semibold mb-4">9. Data Retention</h2>
              <p className="mb-2">We retain your data only for as long as necessary:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>To fulfill the purpose for which it was collected,</li>
                <li>To comply with legal or regulatory obligations,</li>
                <li>To resolve disputes or enforce contracts</li>
              </ul>
              <p className="mb-2">When retention is no longer required, we securely delete or anonymize your data.</p>
            </div>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Your Rights Under NDPA/NDPR</h2>
            <p className="mb-2">
              As a data subject under the <strong> Nigerian Data Protection Act (NDPA 2023) </strong>and the{" "}
              <strong>NDPR</strong>, you have the following rights with respect to your personal data:
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                <strong>Right of Access</strong>
                <ul className="list-[circle] list-inside space-y-2">
                  <li>
                    You can request confirmation of whether we process your personal data and obtain a copy of the data
                    we hold about you, together with details about the purpose of processing.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Right to Rectification</strong>
                <ul className="list-[circle] list-inside space-y-2">
                  <li>
                    You can request correction of inaccurate or incomplete personal data to ensure the information we
                    hold is accurate and up to date.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Right to Withdraw Consent</strong>
                <ul className="list-[circle] list-inside space-y-2">
                  <li>
                    Where processing is based on your consent (e.g., marketing communications), you may withdraw that
                    consent at any time. Withdrawal does not affect prior lawful processing.
                  </li>
                </ul>
              </li>

              <li>
                <strong>Right to Erasure (“Right to be Forgotten”)</strong>
                <ul className="list-[circle] list-inside space-y-2">
                  <li>
                    You may request deletion of your personal data in certain circumstances, such as when it is no
                    longer necessary for the purposes collected, or where you have withdrawn consent—except where
                    retention is required by law (e.g., tax, AML, regulatory compliance).
                  </li>
                </ul>
              </li>

              <li>
                <strong>Right to Restrict Processing</strong>
                <ul className="list-[circle] list-inside space-y-2">
                  <li>
                    You may request we limit the processing of your data in specific situations, such as while verifying
                    accuracy or handling an objection request.
                  </li>
                </ul>
              </li>

              <li>
                <strong>Right to Restrict Processing</strong>
                <ul className="list-[circle] list-inside space-y-2">
                  <li>You can object at any time to the processing of your personal data for direct marketing.</li>
                  <li>
                    You may also object to processing based on legitimate interests, unless we demonstrate compelling
                    legitimate grounds that override your rights and freedoms.
                  </li>
                </ul>
              </li>

              <li>
                <strong>Right to Data Portability</strong>
                <ul className="list-[circle] list-inside space-y-2">
                  <li>
                    You have the right to request a copy of your data in a structured, commonly used, and
                    machine-readable format, and to transmit it to another controller where technically feasible.
                  </li>
                </ul>
              </li>

              <li>
                <strong>Right Not to Be Subject to Automated Decision-Making</strong>
                <ul className="list-[circle] list-inside space-y-2">
                  <li>
                    You have the right not to be subject to decisions based solely on automated processing (including
                    profiling) that produce legal or similarly significant effects, unless such processing is necessary
                    for entering into or performing a contract, authorized by law, or based on your explicit consent.
                  </li>
                </ul>
              </li>

              <li>
                <strong>Right to Lodge a Complaint</strong>
                <ul className="list-[circle] list-inside space-y-2">
                  <li>
                    If you believe your data rights have been violated, you may lodge a complaint with our{" "}
                    <strong>Data Protection Officer (DPO)</strong> or escalate it to the{" "}
                    <strong>Nigeria Data Protection Commission (NDPC).</strong>
                  </li>
                </ul>
              </li>
            </ol>
            <h3 className="text-xl font-bold mb-6 mt-4">How to Exercise Your Rights</h3>
            <p>
              To exercise these rights, please contact us using the details provided in the <strong>Contact Us</strong>{" "}
              section below. We may require you to verify your identity before fulfilling your request, in line with
              legal requirements.
            </p>
          </section>

          {/* Section 11 Updates to This Privacy Policy*/}
          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Updates to This Privacy Policy</h2>
            <p className="mb-2">
              We may update this policy periodically. Updates will be posted on our website/app with a new “Last
              Updated” date. For major changes, we will notify you directly.
            </p>
          </section>

          {/* Section 12 Contact Us */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">12. Contact Us</h2>
            <p className="mb-2">For inquiries or to exercise your data rights, please contact:</p>
            <ul className="space-y-3">
              <li>
                <strong>Legal Officer</strong>{" "}
              </li>
              <li>
                <a href="mailto:support@jolo.ng" className="underline hover:opacity-80">
                  support@jolo.ng
                </a>
              </li>
              <li>
                <span>2, Oyedele Ogunniyi Street, Anthony Village, Lagos</span>
              </li>
              <li>
                <a href="tel:+2349137578052" className="hover:opacity-80">
                  +234-913-757-8052
                </a>
              </li>
            </ul>
          </section>
        </section>
      </article>
    </MainLayout>
  );
};

export default PrivacyPolicy;
