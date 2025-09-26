import React from "react";
import MainLayout from "@/components/Layout/MainLayout";

const PrivacyPolicy = () => {
  return (
    <MainLayout>
      <article className="max-w-5xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy – Jolo</h1>
          <p className="text-sm text-gray-600 text-left">
            <strong>Effective Date:</strong> 25/9/2025 <br /> <strong>Last Updated:</strong> 25/9/2025
          </p>
          <p className="mt-4 text-base text-gray-700">
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
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
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
              <h4 className="font-semibold">1. For Customers/Users:</h4>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>
                  <strong>Identity Data:</strong> Full name, gender, date of birth (optional), email address, etc.
                </li>
                <li>
                  <strong>Contact Data:</strong> Phone number, email address, delivery addresses, etc.
                </li>
                <li>
                  <strong>Account Data:</strong> Username, password, profile picture (if uploaded), order history, etc.
                </li>
                <li>
                  <strong>Payment & Financial Data:</strong> Debit/credit card details (securely processed), wallet
                  info, etc.
                </li>
                <li>
                  <strong>Support & Feedback Data:</strong> Info you provide when contacting customer support or
                  surveys.
                </li>
              </ul>
            </div>

            {/* Vendors */}
            <div className="mb-4">
              <h4 className="font-semibold">2. For Vendors/Restaurants:</h4>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Registered business name, CAC certificate, TIN.</li>
                <li>Business address, contact number, email, manager’s name.</li>
                <li>Bank account information for payouts.</li>
                <li>Menu, pricing, and promotional materials provided to Jolo.</li>
              </ul>
            </div>
          </div>
        </section>
      </article>
    </MainLayout>
  );
};

export default PrivacyPolicy;
