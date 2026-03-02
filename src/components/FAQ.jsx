import { useState } from 'react'

const FAQ = () => {
    const [openFaq, setOpenFaq] = useState(null)

    const faqs = [
        { question: 'What is Bookmark?', answer: 'Vivamus luctus eros aliquet convallis ultricies. Mauris augumassa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.' },
        { question: 'How can I request a new browser?', answer: 'Vivamus luctus eros aliquet convallis ultricies. Mauris augumassa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.' },
        { question: 'Is there a mobile app?', answer: 'Vivamus luctus eros aliquet convallis ultricies. Mauris augumassa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.' },
        { question: 'What about other Chromium browsers?', answer: 'Vivamus luctus eros aliquet convallis ultricies. Mauris augumassa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.' }
    ]

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-3xl font-medium mb-6 text-center">Frequently Asked Questions</h2>
                <p className="text-gray-500 mb-12 text-center max-w-xl mx-auto">Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</p>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
                            <button
                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                className="w-full px-6 py-5 flex justify-between items-center hover:text-red-500 transition"
                            >
                                <span className="font-normal text-left">{faq.question}</span>
                                <svg
                                    className={`w-5 h-5 transition-transform ${openFaq === index ? 'rotate-180 text-red-500' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {openFaq === index && (
                                <div className="px-6 pb-5 text-gray-500 leading-relaxed">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-lg hover:bg-blue-700 transition">More Info</button>
                </div>
            </div>
        </section>
    )
}

export default FAQ
