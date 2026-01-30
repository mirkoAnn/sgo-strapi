import type { Schema, Struct } from '@strapi/strapi';

export interface BookmakerInfo extends Struct.ComponentSchema {
  collectionName: 'components_bookmaker_infos';
  info: {
    displayName: 'Info';
  };
  attributes: {
    hasBetsVariety: Schema.Attribute.Boolean;
    hasCashout: Schema.Attribute.Boolean;
    hasEsports: Schema.Attribute.Boolean;
    hasGreatBets: Schema.Attribute.Boolean;
    hasStreaming: Schema.Attribute.Boolean;
  };
}

export interface BookmakerWelcomeBonus extends Struct.ComponentSchema {
  collectionName: 'components_bookmaker_welcome_bonuses';
  info: {
    displayName: 'welcomeBonus';
  };
  attributes: {
    tcUrl: Schema.Attribute.String;
    withDeposit: Schema.Attribute.String;
    withDepositRequirements: Schema.Attribute.String;
  };
}

export interface CasinoInfo extends Struct.ComponentSchema {
  collectionName: 'components_casino_infos';
  info: {
    displayName: 'Info';
  };
  attributes: {
    bonusRating: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    designRating: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    gamesRating: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    hasBlackjack: Schema.Attribute.Boolean;
    hasLiveGames: Schema.Attribute.Boolean;
    hasPoker: Schema.Attribute.Boolean;
    hasRoulette: Schema.Attribute.Boolean;
    hasSportBetting: Schema.Attribute.Boolean;
    mobileRating: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    supportRating: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
  };
}

export interface CasinoWelcomeBonus extends Struct.ComponentSchema {
  collectionName: 'components_casino_welcome_bonuses';
  info: {
    displayName: 'welcomeBonus';
  };
  attributes: {
    isExclusive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    noDeposit: Schema.Attribute.String;
    noDepositRequirements: Schema.Attribute.String;
    tcUrl: Schema.Attribute.String;
    withDeposit: Schema.Attribute.String;
    withDepositRequirements: Schema.Attribute.String;
  };
}

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
      'bookmaker.info': BookmakerInfo;
      'bookmaker.welcome-bonus': BookmakerWelcomeBonus;
      'casino.info': CasinoInfo;
      'casino.welcome-bonus': CasinoWelcomeBonus;
      'common.colors': CommonColors;
      'common.rating': CommonRating;
      'faqs.faqs': FaqsFaqs;
      'seo.seo': SeoSeo;
      'slot.info': SlotInfo;
    }
  }
}
