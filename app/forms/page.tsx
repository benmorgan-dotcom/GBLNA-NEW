'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '@/lib/LanguageContext';
import PageHeader from '@/components/PageHeader';
import { Check, ChevronRight, ChevronLeft, FileText, ShieldCheck, Anchor, FileSignature, AlertTriangle } from 'lucide-react';

const STEPS = [
  { id: 1, title: "Information", icon: FileText },
  { id: 2, title: "Power of Attorney", icon: FileSignature },
  { id: 3, title: "Waiver & CBP", icon: AlertTriangle },
  { id: 4, title: "Shipping Agreement", icon: ShieldCheck },
  { id: 5, title: "Marine Insurance", icon: Anchor },
];

export default function FormsPage() {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    date: '',
    shipperName: '',
    shipperPassport: '',
    shipperCompany: '',
    shipperTaxId: '',
    shipperPhone: '',
    shipperEmail: '',
    shipperUsAddress: '',
    shipperCity: '',
    shipperState: '',
    shipperZip: '',
    consigneeName: '',
    consigneePhone1: '',
    consigneePhone2: '',
    consigneeEmail: '',
    consigneeAddress: '',
    consigneeCity: '',
    consigneeCountry: '',
    consigneeZip: '',
    poaPrintName: '',
    poaSignature: '',
    poaDate: '',
    waiverPrintName: '',
    waiverSignature: '',
    waiverDate: '',
    agreementPrintName: '',
    agreementDate: '',
    agreementSignature: '',
    insuranceChoice: '', // 'A' or 'B'
    insuranceASignature: '',
    insuranceAValue: '',
    insuranceAType: '', // 'Total Loss' or 'Full Coverage'
    insuranceBPrintName: '',
    insuranceBSignature: '',
    insuranceBDate: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (currentStep < STEPS.length) setCurrentStep(prev => prev + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Form submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 lg:pb-0 font-sans">
      <PageHeader 
        title="Online Forms" 
        subtitle="Complete your shipping documentation step by step."
        breadcrumb={[{ label: "Forms", href: '/forms' }]}
      />

      <main className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200 rounded-full -z-10"></div>
            <div 
              className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-[#f57400] rounded-full -z-10 transition-all duration-500"
              style={{ width: `${((currentStep - 1) / (STEPS.length - 1)) * 100}%` }}
            ></div>
            
            {STEPS.map((step) => {
              const Icon = step.icon;
              const isActive = currentStep === step.id;
              const isCompleted = currentStep > step.id;
              
              return (
                <div key={step.id} className="flex flex-col items-center gap-2">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${
                    isActive ? 'bg-[#f57400] border-white text-white shadow-lg scale-110' : 
                    isCompleted ? 'bg-[#f57400] border-white text-white' : 
                    'bg-white border-gray-200 text-gray-400'
                  }`}>
                    {isCompleted ? <Check className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                  </div>
                  <span className={`text-xs font-bold uppercase tracking-widest hidden sm:block ${
                    isActive ? 'text-[#f57400]' : isCompleted ? 'text-gray-900' : 'text-gray-400'
                  }`}>
                    {step.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-[32px] shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-8 sm:p-12">
            
            {/* Header Logos (Simulated) */}
            <div className="flex flex-col items-center justify-center mb-10 border-b border-gray-100 pb-8">
              <div className="w-32 h-32 rounded-full border-2 border-gray-800 flex items-center justify-center mb-4 relative">
                <div className="absolute inset-2 border border-gray-300 rounded-full"></div>
                <span className="font-black text-4xl tracking-tighter">GBL</span>
              </div>
              <h2 className="text-3xl font-black text-gray-900 tracking-tight">Global Business Link<span className="text-[#50b1d1] text-lg align-top ml-1">Inc</span></h2>
              <p className="text-gray-500 text-sm tracking-widest uppercase mt-1">Connecting The World</p>
              <div className="text-center mt-4 text-sm text-gray-600 font-medium">
                <p>4000 Coolidge Ave, Suite K, Baltimore, MD 21229</p>
                <p>Ph.410-242-1005 Email: <a href="mailto:info@gblna.com" className="text-blue-600 underline">info@gblna.com</a></p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                
                {/* STEP 1: Information */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-10"
                  >
                    <div className="flex items-center gap-4 mb-8">
                      <label className="font-bold text-gray-700 uppercase tracking-widest text-sm">DATE:</label>
                      <input type="date" name="date" value={formData.date} onChange={handleChange} className="border-b-2 border-gray-300 focus:border-[#f57400] outline-none px-2 py-1 text-gray-900 bg-transparent" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-serif text-center mb-8">Shipper&apos;s Information</h3>
                      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-700">Name: (first/last)</label>
                          <input type="text" name="shipperName" value={formData.shipperName} onChange={handleChange} className="w-full border-b-2 border-gray-300 focus:border-[#f57400] outline-none px-2 py-2 bg-transparent" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-700">Passport #:</label>
                          <input type="text" name="shipperPassport" value={formData.shipperPassport} onChange={handleChange} className="w-full border-b-2 border-gray-300 focus:border-[#f57400] outline-none px-2 py-2 bg-transparent" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-700">Company Name (if any):</label>
                          <input type="text" name="shipperCompany" value={formData.shipperCompany} onChange={handleChange} className="w-full border-b-2 border-gray-300 focus:border-[#f57400] outline-none px-2 py-2 bg-transparent" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-700">Company Tax ID(EIN)#:</label>
                          <input type="text" name="shipperTaxId" value={formData.shipperTaxId} onChange={handleChange} className="w-full border-b-2 border-gray-300 focus:border-[#f57400] outline-none px-2 py-2 bg-transparent" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-700">Phone#:</label>
                          <input type="tel" name="shipperPhone" value={formData.shipperPhone} onChange={handleChange} className="w-full border-b-2 border-gray-300 focus:border-[#f57400] outline-none px-2 py-2 bg-transparent" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-700">Email:</label>
                          <input type="email" name="shipperEmail" value={formData.shipperEmail} onChange={handleChange} className="w-full border-b-2 border-gray-300 focus:border-[#f57400] outline-none px-2 py-2 bg-transparent" />
                        </div>
                        <div className="sm:col-span-2 space-y-2">
                          <label className="text-sm font-bold text-gray-700">US Address:</label>
                          <input type="text" name="shipperUsAddress" value={formData.shipperUsAddress} onChange={handleChange} className="w-full border-b-2 border-gray-300 focus:border-[#f57400] outline-none px-2 py-2 bg-transparent" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-700">City:</label>
                          <input type="text" name="shipperCity" value={formData.shipperCity} onChange={handleChange} className="w-full border-b-2 border-gray-300 focus:border-[#f57400] outline-none px-2 py-2 bg-transparent" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-700">State:</label>
                          <input type="text" name="shipperState" value={formData.shipperState} onChange={handleChange} className="w-full border-b-2 border-gray-300 focus:border-[#f57400] outline-none px-2 py-2 bg-transparent" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-700">Zip Code:</label>
                          <input type="text" name="shipperZip" value={formData.shipperZip} onChange={handleChange} className="w-full border-b-2 border-gray-300 focus:border-[#f57400] outline-none px-2 py-2 bg-transparent" />
                        </div>
                      </div>
                    </div>

                    <div className="pt-8 border-t border-gray-100">
                      <h3 className="text-2xl font-serif text-center mb-8">Consignee&apos;s (Receiver) Information</h3>
                      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                        <div className="sm:col-span-2 space-y-2">
                          <label className="text-sm font-bold text-gray-700">Full Name:</label>
                          <input type="text" name="consigneeName" value={formData.consigneeName} onChange={handleChange} className="w-full border-b-2 border-gray-300 focus:border-[#f57400] outline-none px-2 py-2 bg-transparent" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-700">Ph.#:</label>
                          <input type="tel" name="consigneePhone1" value={formData.consigneePhone1} onChange={handleChange} className="w-full border-b-2 border-gray-300 focus:border-[#f57400] outline-none px-2 py-2 bg-transparent" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-700">2nd Ph.#:</label>
                          <input type="tel" name="consigneePhone2" value={formData.consigneePhone2} onChange={handleChange} className="w-full border-b-2 border-gray-300 focus:border-[#f57400] outline-none px-2 py-2 bg-transparent" />
                        </div>
                        <div className="sm:col-span-2 space-y-2">
                          <label className="text-sm font-bold text-gray-700">Email:</label>
                          <input type="email" name="consigneeEmail" value={formData.consigneeEmail} onChange={handleChange} className="w-full border-b-2 border-gray-300 focus:border-[#f57400] outline-none px-2 py-2 bg-transparent" />
                        </div>
                        <div className="sm:col-span-2 space-y-2 mt-4">
                          <label className="text-sm font-bold text-gray-700 block">Overseas Address (foreign address): There must be a street name and building number</label>
                        </div>
                        <div className="sm:col-span-2 space-y-2">
                          <label className="text-sm font-bold text-gray-700">Address:</label>
                          <input type="text" name="consigneeAddress" value={formData.consigneeAddress} onChange={handleChange} className="w-full border-b-2 border-gray-300 focus:border-[#f57400] outline-none px-2 py-2 bg-transparent" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-700">City:</label>
                          <input type="text" name="consigneeCity" value={formData.consigneeCity} onChange={handleChange} className="w-full border-b-2 border-gray-300 focus:border-[#f57400] outline-none px-2 py-2 bg-transparent" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-700">Country:</label>
                          <input type="text" name="consigneeCountry" value={formData.consigneeCountry} onChange={handleChange} className="w-full border-b-2 border-gray-300 focus:border-[#f57400] outline-none px-2 py-2 bg-transparent" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-700">Zip Code (if any):</label>
                          <input type="text" name="consigneeZip" value={formData.consigneeZip} onChange={handleChange} className="w-full border-b-2 border-gray-300 focus:border-[#f57400] outline-none px-2 py-2 bg-transparent" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: Power of Attorney */}
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-10"
                  >
                    <h3 className="text-2xl font-serif text-center mb-10 uppercase tracking-widest">General Export Power of Attorney</h3>
                    
                    <div className="prose prose-lg max-w-none text-gray-800 leading-loose">
                      <p>
                        I hereby name and appoint GLOBAL BUSINESS LINK INC. to be my lawful attorney-in-fact to act on my behalf to conduct all transactions necessary with the U.S Customs Service in the proper exportation of all my vehicles out of the United States and to do all things necessary to ensure compliance with all requirements pursuant to Section 19 2 of the Customs Regulations.
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-12 mt-16">
                      <div className="space-y-2">
                        <input type="text" name="poaPrintName" value={formData.poaPrintName} onChange={handleChange} className="w-full border-b-2 border-gray-400 focus:border-[#f57400] outline-none px-2 py-2 bg-transparent text-center" />
                        <p className="text-center text-sm font-medium text-gray-500">Print Name</p>
                      </div>
                      <div className="space-y-2">
                        <input type="text" name="poaSignature" value={formData.poaSignature} onChange={handleChange} className="w-full border-b-2 border-gray-400 focus:border-[#f57400] outline-none px-2 py-2 bg-transparent text-center font-script text-xl" placeholder="Sign here" />
                        <p className="text-center text-sm font-medium text-gray-500">Signature</p>
                      </div>
                      <div className="space-y-2 sm:col-span-2 max-w-xs">
                        <div className="flex items-center gap-4">
                          <label className="text-sm font-medium text-gray-500">Date:</label>
                          <input type="date" name="poaDate" value={formData.poaDate} onChange={handleChange} className="w-full border-b-2 border-gray-400 focus:border-[#f57400] outline-none px-2 py-2 bg-transparent" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: Waiver & CBP */}
                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-10"
                  >
                    <div className="text-center mb-10">
                      <h3 className="text-2xl font-serif uppercase tracking-widest mb-2">Illegal Goods Waiver and CBP Inspection</h3>
                      <p className="text-red-600 font-bold tracking-widest">(IMPORTANT)</p>
                    </div>
                    
                    <div className="prose prose-lg max-w-none text-gray-800 leading-loose space-y-6">
                      <p>
                        I certify that this shipment and future shipments do not contain anything illegal including but not limited to unauthorized explosives, destructive devices, firearms, hazardous materials, or illicit drugs. I do consent to a search of this shipment.
                      </p>
                      <p className="font-bold">
                        I understand that US Customs and Border Protection (CBP) has the right and duty to hold my shipment for various methods of inspection, including to but not limited to physical scan, etc. Shipment will be placed on hold until all charges are fully paid to US Customs and Border Protection (CBP). I agree to pay all charges as a result of a CBP hold/inspection.
                      </p>
                      <p>
                        I am aware that this endorsement and original signature, along with other shipping documents, will be kept on file until this shipment is delivered or for a period of one year.
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-12 mt-16">
                      <div className="space-y-2">
                        <input type="text" name="waiverPrintName" value={formData.waiverPrintName} onChange={handleChange} className="w-full border-b-2 border-gray-400 focus:border-[#f57400] outline-none px-2 py-2 bg-transparent text-center" />
                        <p className="text-center text-sm font-medium text-gray-500">Print Name</p>
                      </div>
                      <div className="space-y-2">
                        <input type="text" name="waiverSignature" value={formData.waiverSignature} onChange={handleChange} className="w-full border-b-2 border-gray-400 focus:border-[#f57400] outline-none px-2 py-2 bg-transparent text-center font-script text-xl" placeholder="Sign here" />
                        <p className="text-center text-sm font-medium text-gray-500">Signature</p>
                      </div>
                      <div className="space-y-2 sm:col-span-2 max-w-xs">
                        <div className="flex items-center gap-4">
                          <label className="text-sm font-medium text-gray-500">Date:</label>
                          <input type="date" name="waiverDate" value={formData.waiverDate} onChange={handleChange} className="w-full border-b-2 border-gray-400 focus:border-[#f57400] outline-none px-2 py-2 bg-transparent" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 4: Shipping Agreement */}
                {currentStep === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                  >
                    <h3 className="text-2xl font-serif text-center mb-8 uppercase tracking-widest">International Shipping Agreement</h3>
                    
                    <div className="text-sm text-gray-800 leading-relaxed space-y-6">
                      <p>
                        Definitions: &quot;Global Business Link Inc. &quot;the Company&quot;, Customer&quot;: Person or entity requesting services; Global Business Link Inc agrees to provide, and customer agrees to receive the services of Global Business Link Inc according to the following terms and conditions: <strong className="underline"> (by signing below you acknowledge reading, and accepting all below terms).</strong>
                      </p>
                      
                      <ol className="list-decimal pl-5 space-y-4">
                        <li>
                          Customer will use the Company&apos;s services in a manner consistent with any and all applicable laws of the State of Maryland and the U.S Federal Government.
                        </li>
                        <li>
                          The Company reserves the right, in its complete discretion, to deactivate the customer&apos;s account(s) upon an indication of credit problems, including delinquent payments.
                        </li>
                        <li>
                          Customer agrees that all shipments do not include any hazardous material (any flammable objects/substances including but not limited to batteries, propane tanks, etc.). Customer hereby agrees to indemnify and hold harmless the Company for any claim resulting from shipping illegal materials.
                        </li>
                        <li>
                          The Company gives no warranty, expressed or implied, for the services provided. While the Company shall make every reasonable effort to safely ship three or four vehicles in a 40&apos; or 45&apos; container, Global Business Link Inc is not liable for any damage resulting from this action.
                        </li>
                        <li>
                          All vehicles will be delivered by the Customer with less and a quarter of tank of fuel if a vehicle is delivered with a tank of fuel greater than a quarter of tank of fuel, I authorize the Company to take reasonable steps to drain it below a quarter of a tank. That includes and is not limited to letting the vehicle idle, pumping the necessary fuel out, or taking to an authorized dealership for removal of the fuel. I understand and accept that all charges as a result of these actions will be on my account.
                        </li>
                        <li>
                          Storage of vehicles will be allowed one week free, then charged at a rate of $30 per day. Storage of goods will be allowed one week free, then charged at a rate of $1.0 per cubic meter/ day. Customer agrees to this standard company policy or has made other arrangements in writing with the Company.
                        </li>
                        <li>
                          Customer understands that payment of the Invoice in full is due before arrival of the shipment to its final destination. If the shipment has been at destination for thirty (30) days or more, the Company will change the consignee to an entity of their choosing and the Customer will no longer have rights to the shipment or the cargo.
                        </li>
                      </ol>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
                      <div className="space-y-2">
                        <input type="text" name="agreementPrintName" value={formData.agreementPrintName} onChange={handleChange} className="w-full border-b-2 border-gray-400 focus:border-[#f57400] outline-none px-2 py-2 bg-transparent text-center" />
                        <p className="text-center text-sm font-medium text-gray-500">Print Name</p>
                      </div>
                      <div className="space-y-2">
                        <input type="date" name="agreementDate" value={formData.agreementDate} onChange={handleChange} className="w-full border-b-2 border-gray-400 focus:border-[#f57400] outline-none px-2 py-2 bg-transparent text-center" />
                        <p className="text-center text-sm font-medium text-gray-500">Date</p>
                      </div>
                      <div className="space-y-2">
                        <input type="text" name="agreementSignature" value={formData.agreementSignature} onChange={handleChange} className="w-full border-b-2 border-gray-400 focus:border-[#f57400] outline-none px-2 py-2 bg-transparent text-center font-script text-xl" placeholder="Sign here" />
                        <p className="text-center text-sm font-medium text-gray-500">Signature</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 5: Marine Insurance */}
                {currentStep === 5 && (
                  <motion.div
                    key="step5"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                  >
                    <h3 className="text-2xl font-serif text-center mb-6 uppercase tracking-widest">Marine Insurance (If desired by Shipper)</h3>
                    
                    <div className="text-sm text-gray-800 leading-relaxed space-y-4 text-center font-medium">
                      <p>* Marine Insurance is optional. Marine Insurance is not included in the shipping cost. It&apos;s an extra service for additional charge</p>
                      <p>* In case of claim, the insured party must submit the claim directly with insurance company/Broker</p>
                      <p>* Global Business is not affiliated with the insurance company. Global Business offer the marine insurance to facilitate access to marine insurance if desired by our client.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-8 my-10 max-w-3xl mx-auto bg-gray-50 p-6 rounded-2xl border border-gray-200">
                      <ul className="space-y-3 font-bold text-gray-800 list-disc pl-5">
                        <li>Total Loss 1.25% of value</li>
                        <li>Total Loss 1% over $100K value</li>
                        <li>Full Coverage 1.75% of value</li>
                        <li>Full Coverage 1.5% of value over $100K</li>
                      </ul>
                      <ul className="space-y-3 font-bold text-gray-800 list-disc pl-5">
                        <li>$150 Total Loss flate rate on $10,000 value or less</li>
                        <li>$300 Full Coverage flate rate on $10,000 Value or less</li>
                      </ul>
                    </div>

                    <div className="text-center mb-8">
                      <p className="font-bold mb-2">Please choose A or B below:</p>
                      <p className="text-sm text-gray-500">Leaving Page blank or signing the page without choosing the &quot;Yes&quot; or &quot;No&quot; option below will equal to &quot;Declining&quot; Coverage.</p>
                    </div>

                    <div className="space-y-12">
                      {/* Option A */}
                      <div className={`p-8 rounded-3xl border-2 transition-all ${formData.insuranceChoice === 'A' ? 'border-[#f57400] bg-orange-50/30' : 'border-gray-200 hover:border-gray-300'}`}>
                        <label className="flex items-start gap-4 cursor-pointer mb-6">
                          <input type="radio" name="insuranceChoice" value="A" checked={formData.insuranceChoice === 'A'} onChange={handleChange} className="mt-1 w-5 h-5 text-[#f57400] focus:ring-[#f57400]" />
                          <span className="font-bold text-lg">A - Yes, I elect to purchase marine insurance (Sign Below)</span>
                        </label>
                        
                        <div className={`grid sm:grid-cols-2 gap-8 transition-opacity ${formData.insuranceChoice === 'A' ? 'opacity-100' : 'opacity-50 pointer-events-none'}`}>
                          <div className="space-y-2">
                            <input type="text" name="insuranceASignature" value={formData.insuranceASignature} onChange={handleChange} className="w-full border-b-2 border-gray-400 focus:border-[#f57400] outline-none px-2 py-2 bg-transparent text-center font-script text-xl" placeholder="Sign here" />
                            <p className="text-center text-sm font-medium text-gray-500">Signature</p>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <span className="text-gray-500 font-bold mr-2">Vehicle/Goods Value $</span>
                              <input type="number" name="insuranceAValue" value={formData.insuranceAValue} onChange={handleChange} className="w-full border-b-2 border-gray-400 focus:border-[#f57400] outline-none px-2 py-2 bg-transparent" />
                            </div>
                          </div>
                          <div className="sm:col-span-2 space-y-3 mt-4">
                            <p className="font-medium text-gray-700">Please Choose One:</p>
                            <div className="flex gap-6">
                              <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="insuranceAType" value="Total Loss" checked={formData.insuranceAType === 'Total Loss'} onChange={handleChange} className="w-4 h-4 text-[#f57400] focus:ring-[#f57400]" />
                                <span>Total Loss</span>
                              </label>
                              <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="insuranceAType" value="Full Coverage" checked={formData.insuranceAType === 'Full Coverage'} onChange={handleChange} className="w-4 h-4 text-[#f57400] focus:ring-[#f57400]" />
                                <span>Full Coverage</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Option B */}
                      <div className={`p-8 rounded-3xl border-2 transition-all ${formData.insuranceChoice === 'B' ? 'border-[#f57400] bg-orange-50/30' : 'border-gray-200 hover:border-gray-300'}`}>
                        <label className="flex items-start gap-4 cursor-pointer mb-6">
                          <input type="radio" name="insuranceChoice" value="B" checked={formData.insuranceChoice === 'B'} onChange={handleChange} className="mt-1 w-5 h-5 text-[#f57400] focus:ring-[#f57400] shrink-0" />
                          <span className="font-bold text-lg leading-relaxed">B - No, I elect NOT to buy coverage at this time and I understand that the only remittance I have is the $500.00 per shipment in case of loss provided by the carrier (sign below).</span>
                        </label>
                        
                        <div className={`grid sm:grid-cols-2 gap-8 transition-opacity ${formData.insuranceChoice === 'B' ? 'opacity-100' : 'opacity-50 pointer-events-none'}`}>
                          <div className="space-y-2">
                            <input type="text" name="insuranceBPrintName" value={formData.insuranceBPrintName} onChange={handleChange} className="w-full border-b-2 border-gray-400 focus:border-[#f57400] outline-none px-2 py-2 bg-transparent text-center" />
                            <p className="text-center text-sm font-medium text-gray-500">Print Name</p>
                          </div>
                          <div className="space-y-2">
                            <input type="text" name="insuranceBSignature" value={formData.insuranceBSignature} onChange={handleChange} className="w-full border-b-2 border-gray-400 focus:border-[#f57400] outline-none px-2 py-2 bg-transparent text-center font-script text-xl" placeholder="Sign here" />
                            <p className="text-center text-sm font-medium text-gray-500">Signature</p>
                          </div>
                          <div className="space-y-2 sm:col-span-2 max-w-xs">
                            <div className="flex items-center gap-4">
                              <label className="text-sm font-medium text-gray-500">Date:</label>
                              <input type="date" name="insuranceBDate" value={formData.insuranceBDate} onChange={handleChange} className="w-full border-b-2 border-gray-400 focus:border-[#f57400] outline-none px-2 py-2 bg-transparent" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-16 pt-8 border-t border-gray-100">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={currentStep === 1}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm uppercase tracking-widest transition-all ${
                    currentStep === 1 
                      ? 'text-gray-300 cursor-not-allowed' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                  Back
                </button>
                
                {currentStep < STEPS.length ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest bg-[#1A1A1A] text-white hover:bg-[#f57400] transition-colors shadow-lg"
                  >
                    Next Step
                    <ChevronRight className="w-5 h-5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest bg-[#f57400] text-white hover:bg-[#d96600] transition-colors shadow-lg shadow-orange-500/30"
                  >
                    Submit Form
                    <Check className="w-5 h-5" />
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

