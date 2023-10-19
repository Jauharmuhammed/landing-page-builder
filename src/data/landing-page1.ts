export default {
    styles: {
        primaryColor: "#0077B5",
        secondaryColor: "#4CAF50",
    },
    elements: {
        navbar: {
            logo: {
                src: "/images/landerr.svg",
            },
            links: [
                {
                    label: "Home",
                    link: "/",
                },
                {
                    label: "Features",
                    link: "/features",
                },
                {
                    label: "Pricing",
                    link: "/pricing",
                },
                {
                    label: "Contact Us",
                    link: "/contact",
                },
            ],
            actions: [
                {
                    label: "Register",
                    link: "/register",
                    varient: "default",
                },
            ],
        },
        services: {
            header: {
                title: "Your Landing Page Builder",
                description: "Easily create stunning landing pages.",
            },
            section: [
                {
                    src: "/images/hero-image1.jpeg",
                    link: "/use",
                    title: "Easy to Use",
                    description: "No coding required. Our builder is user-friendly.",
                    label: "Learn More",
                },
                {
                    src: "/images/hero-image2.jpeg",
                    link: "/Customization",
                    title: "Customization",
                    description: "Tailor landing pages to your brand's unique style.",
                    label: "Learn More",
                },
                {
                    src: "/images/hero-image3.jpeg",
                    link: "/use",
                    title: "Conversion Optimization",
                    description: "Boost your conversions with our tools.",
                    label: "Learn More",
                },
            ],
        },
        header: {
            heading: "Transform Visitors into Customers with Our Landing Page Builder",
            description:
                "Experience the power to transform casual visitors into devoted customers with our intuitive Landing Page Builder. Create high-converting landing pages that boost your online success.",
            image: "/images/hero-image3.jpeg",
            ctaButton: {
                label: "Get Started",
                link: "/get-started",
            },
        },
        sections: [
            {
                type: "productFeatures",
                content: {
                    features: [
                        {
                            icon: "feature-icon-1.png",
                            title: "Easy to Use",
                            description: "No coding required. Our builder is user-friendly.",
                        },
                        {
                            icon: "feature-icon-2.png",
                            title: "Customization",
                            description: "Tailor landing pages to your brand's unique style.",
                        },
                        {
                            icon: "feature-icon-3.png",
                            title: "Conversion Optimization",
                            description: "Boost your conversions with our tools.",
                        },
                    ],
                },
            },
            {
                type: "plans",
                content: {
                    plans: [
                        {
                            name: "Starter Plan",
                            price: "$19/month",
                            description: "Ideal for small businesses.",
                            ctaButton: {
                                text: "Choose Plan",
                                link: "/choose-starter-plan",
                            },
                        },
                        {
                            name: "Pro Plan",
                            price: "$49/month",
                            description: "For growing businesses and marketers.",
                            ctaButton: {
                                text: "Choose Plan",
                                link: "/choose-pro-plan",
                            },
                        },
                    ],
                },
            },
            {
                type: "contact",
                content: {
                    heading: "Contact Us",
                    description: "Have questions? Contact our support team.",
                    ctaButton: {
                        text: "Contact Support",
                        link: "/contact-support",
                    },
                },
            },
            {
                type: "socialProof",
                content: {
                    quotes: [
                        {
                            text: "Our landing page saw a 30% increase in conversions thanks to this builder.",
                            author: "John Doe, CEO",
                        },
                        {
                            text: "The best landing page builder I've ever used.",
                            author: "Jane Smith, Marketer",
                        },
                    ],
                },
            },
        ],
        footer: {
            logo: {
                src: "/images/landerr.svg",
            },
            section: {
                main: {
                    title: "We would love to hear from you.",
                    description:
                        "Feel free to reach our if you want to collaborate with us, or simply have a chat.",
                    ctaButton: {
                        label: "Contact Support",
                        link: "/contact-support",
                        varient: "primary",
                    },
                    copyright: "© 2023 Your Company. All rights reserved.",
                    privacyAndPolicy: {
                        label: "Privacy Policy",
                        link: "/privacy-policy",
                    },
                },
                contact: {
                    mail: "contact@yourcompany.com",
                    phone: "+1 (123) 456-7890",
                    address: "123 Main St, Your City, Country",
                },
                social: [
                    {
                        label: "Facebook",
                        link: "https://www.facebook.com/yourcompany",
                    },
                    {
                        label: "Twitter",
                        link: "https://twitter.com/yourcompany",
                    },
                    {
                        label: "LinkedIn",
                        link: "https://www.linkedin.com/company/yourcompany",
                    },
                ],
                services: [
                    {
                        label: "Terms of Service",
                        link: "/terms-of-service",
                    },
                    {
                        label: "Refund Policy",
                        link: "/refund-policy",
                    },
                    {
                        label: "FAQ",
                        link: "/faq",
                    },
                ],
            },
        },
    },
};
