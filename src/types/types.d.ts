export type link = {
    label: string;
    link: string;
};

export type button = link & {
    varient: string;
};

export type navbar = {
    logo: {
        src: string;
    };
    links?: link[];
    actions?: button[];
};

export type header = {
    heading: string;
    description?: string;
    ctaButton?: button;
    image?: string;
};

export type services = {
    header: {
        title: string;
        description?: string;
    };
    section: {
        src: string;
        link?: string;
        title: string;
        description?: string;
        label?: string;
    }[];
};

export type footer = {
    logo: {
        src: string;
    };
    section: {
        main: {
            title: string;
            description: string;
            ctaButton: button;
            copyright: string;
            privacyAndPolicy: link;
        };
        contact: {
            mail: string;
            phone: string;
            address: string;
        };
        social: link[];
        services: link[];
    };
};

export type pageData = {
    styles: {
        primaryColor?: string;
        secondaryColor?: string;
    };
    elements: {
        navbar?: navbar;
        header?: header;
        services?: services;
        footer?: footer;
    };
};

export type layoutReducer = {
    layout: pageData;
};

export type projectReducer = {
    newProject: string;
};

export interface NavItem {
    title: string;
    href?: string;
    disabled?: boolean;
    external?: boolean;
    label?: string;
}

export interface NavItemWithChildren extends NavItem {
    items: NavItemWithChildren[];
}

export interface MainNavItem extends NavItem {}

export interface SidebarNavItem extends NavItemWithChildren {}
