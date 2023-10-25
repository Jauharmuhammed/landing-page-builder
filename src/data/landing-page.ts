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
        header: {
            heading: "Transform Visitors into Customers with Our Landing Page Builder",
            description:
                "Experience the power to transform casual visitors into devoted customers with our intuitive Landing Page Builder. Create high-converting landing pages that boost your online success.",
            image: "/images/hero-image3.jpeg",
            ctaButton: {
                label: "Get Started",
                link: "/get-started",
                varient: "default",
            },
        },
        services: {
            header: {
                title: "Your Landing Page Builder",
                description: "Easily create stunning landing pages.",
            },
            section: [
                {
                    src: "/animations/easy-to-use-loop.svg",
                    link: "/use",
                    title: "Easy to Use",
                    description: "No coding required. Our builder is user-friendly.",
                    label: "Learn More",
                },
                {
                    src: "/animations/customization-loop.svg",
                    link: "/Customization",
                    title: "Customization",
                    description: "Tailor landing pages to your brand's unique style.",
                    label: "Learn More",
                },
                {
                    src: "/animations/conversion-loop.svg",
                    link: "/use",
                    title: "Conversion Optimization",
                    description: "Boost your conversions with our tools.",
                    label: "Learn More",
                },
            ],
        },
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
                    copyright: "© 2023 Landerr. All rights reserved.",
                    privacyAndPolicy: {
                        label: "Privacy Policy",
                        link: "/privacy-policy",
                    },
                },
                contact: {
                    mail: "contact@landerr.io",
                    phone: "+1 (123) 456-7890",
                    address: "Sheikh Zayed Rd, Dubai, United Arab Emirates (UAE)",
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
