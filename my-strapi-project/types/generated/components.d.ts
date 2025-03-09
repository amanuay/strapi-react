import type { Schema, Struct } from '@strapi/strapi';

export interface BannerBanner extends Struct.ComponentSchema {
  collectionName: 'components_banner_banners';
  info: {
    displayName: 'banner';
  };
  attributes: {
    banner_description: Schema.Attribute.Text;
    banner_heading: Schema.Attribute.String;
    banner_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface ButtonButton extends Struct.ComponentSchema {
  collectionName: 'components_button_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    label: Schema.Attribute.String;
    link: Schema.Attribute.String;
    order: Schema.Attribute.Integer;
    type: Schema.Attribute.Enumeration<['primary', 'secondary', 'outline']>;
  };
}

export interface CopyrightCopyrightInfo extends Struct.ComponentSchema {
  collectionName: 'components_copyright_copyright_infos';
  info: {
    description: '';
    displayName: 'copyright_info';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface CtaCta extends Struct.ComponentSchema {
  collectionName: 'components_cta_ctas';
  info: {
    description: '';
    displayName: 'CTA';
  };
  attributes: {
    button: Schema.Attribute.Component<'button.button', false>;
    description: Schema.Attribute.Text;
  };
}

export interface DesignedByDesignedBy extends Struct.ComponentSchema {
  collectionName: 'components_designed_by_designed_bies';
  info: {
    displayName: 'designed_by';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
  };
}

export interface EventEvent extends Struct.ComponentSchema {
  collectionName: 'components_event_events';
  info: {
    description: '';
    displayName: 'event';
  };
  attributes: {
    cover_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    date: Schema.Attribute.Date;
    event_type: Schema.Attribute.Relation<
      'oneToOne',
      'api::event-type.event-type'
    >;
    gallery: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    name: Schema.Attribute.String;
  };
}

export interface LinkLink extends Struct.ComponentSchema {
  collectionName: 'components_link_links';
  info: {
    description: '';
    displayName: 'link';
  };
  attributes: {
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface NavigationNavigation extends Struct.ComponentSchema {
  collectionName: 'components_navigation_navigations';
  info: {
    description: '';
    displayName: 'navigation';
  };
  attributes: {
    link: Schema.Attribute.String;
    order: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
  };
}

export interface SchoolInfoSchoolInfo extends Struct.ComponentSchema {
  collectionName: 'components_school_info_school_infos';
  info: {
    description: '';
    displayName: 'school_info';
  };
  attributes: {
    address: Schema.Attribute.Text;
    description: Schema.Attribute.Text;
    email: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    motto: Schema.Attribute.Text;
    name: Schema.Attribute.Text;
    phone: Schema.Attribute.String;
    socials: Schema.Attribute.Relation<
      'oneToMany',
      'api::social-media.social-media'
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'banner.banner': BannerBanner;
      'button.button': ButtonButton;
      'copyright.copyright-info': CopyrightCopyrightInfo;
      'cta.cta': CtaCta;
      'designed-by.designed-by': DesignedByDesignedBy;
      'event.event': EventEvent;
      'link.link': LinkLink;
      'navigation.navigation': NavigationNavigation;
      'school-info.school-info': SchoolInfoSchoolInfo;
    }
  }
}
