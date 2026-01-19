import type { Schema, Struct } from '@strapi/strapi';

export interface CommonColors extends Struct.ComponentSchema {
  collectionName: 'components_common_colors';
  info: {
    displayName: 'Colors';
  };
  attributes: {
    background: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface CommonRating extends Struct.ComponentSchema {
  collectionName: 'components_common_ratings';
  info: {
    displayName: 'Rating';
  };
  attributes: {
    down: Schema.Attribute.Integer;
    up: Schema.Attribute.Integer;
  };
}

export interface FaqsFaqs extends Struct.ComponentSchema {
  collectionName: 'components_faqs_faqs';
  info: {
    displayName: 'Faqs';
  };
  attributes: {
    answer: Schema.Attribute.Blocks;
    question: Schema.Attribute.String;
  };
}

export interface SeoSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'Seo';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SlotInfo extends Struct.ComponentSchema {
  collectionName: 'components_slot_infos';
  info: {
    displayName: 'Info';
  };
  attributes: {
    betMax: Schema.Attribute.String;
    betMin: Schema.Attribute.String;
    hasBonusGame: Schema.Attribute.Boolean;
    hasFreeSpins: Schema.Attribute.Boolean;
    hasJackpot: Schema.Attribute.Boolean;
    paylines: Schema.Attribute.String;
    reels: Schema.Attribute.String;
    rtp: Schema.Attribute.String;
    volatility: Schema.Attribute.Enumeration<['Bassa', 'Media', 'Alta']>;
    winMax: Schema.Attribute.String;
    winMin: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common.colors': CommonColors;
      'common.rating': CommonRating;
      'faqs.faqs': FaqsFaqs;
      'seo.seo': SeoSeo;
      'slot.info': SlotInfo;
    }
  }
}
