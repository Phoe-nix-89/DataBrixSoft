import React from 'react';
import String from '../../constants/strings/Strings';
import * as STORE_URL from '../../constants/urls/storeUrl';
import Routes from '../../constants/routes/routes';

const footerValue = [
  {
    sectionTitle: 'Innovation',
    footerLinks: [
      {
        navigateTo: Routes.INNOVATION_COURSE_V2,
        title: String.BASE_INNOVATION_COURSE
      },
      {
        navigateTo: Routes.INTERACTIVE_ONLINE_CLASS,
        title: String.INTERACTIVE_ONLINE_CLASS
      },
      {
        navigateTo: Routes.INNOVATION_ENGINEER,
        title: String.INNOVATION_ENGINEER
      },
      {
        navigateTo: Routes.SOFTWARE_PRODUCT_ENG,
        title: String.SOFTWARE_PRODUCT_ENG
      },
      // {
      //   navigateTo: Routes.CATEGORY,
      //   title: String.ONLINE_SELF_COURSES,
      // },
      {
        navigateTo: `${Routes.IBC_COURSES}/advanced-embedded-systems`,
        title: String.ADVACNE_EMBEDDED_SYSTEM
      },
      {
        navigateTo: `${Routes.IBC_COURSES}/telecom-based–industry-readiness-programme`,
        title: String.TELECOM_BASED_COURSE
      },
      {
        navigateTo: Routes.INNOVATION_LAB,
        title: String.INNOVATION_LAB
      },
      {
        navigateTo: Routes.INSTITUTION,
        title: String.INSTITUTION
      }
    ]
  },
  {
    sectionTitle: 'About',
    footerLinks: [
      {
        navigateTo: Routes.ABOUT_US,
        title: 'About us'
      },
      {
        navigateTo: Routes.CONTACT_US,
        title: 'Contact us'
      }
    ]
  },
  // {
  //   sectionTitle: "Careers",
  //   footerLinks: [{ navigateTo: Routes.CAREERS, title: "Careers" }],
  // },
  {
    sectionTitle: 'Discover',
    footerLinks: [
      {
        navigateTo: Routes.NEWS_SUBSCRIPTION,
        title: String.NEWS_SUBSCRIPTION
      },
      {
        navigateTo: Routes.PROJECT_ASSISTANCE,
        title: String.PROJECT_ASSISTANCE
      },
      {
        navigateTo: Routes.WEEKLY_QUIZ,
        title: String.WEEKLY_INNOVATION_QUIZ
      },
      {
        navigateTo: Routes.NEWSLETTER_QUIZ,
        title: String.NEWSLETTERS_INNOVATION_QUIZ
      },
      {
        navigateTo: Routes.GENERIC_LAB,
        title: String.INNOVATION_LAB_GENERAL,
      },
      {
        navigateTo: Routes.CAREERS,
        title: String.CAREERS
      },
      {
        navigateTo: Routes.PRESS_RELEASE,
        title: String.PRESS_RELEASE
      },
      {
        navigateTo: Routes.WORKSHOP_EXPLORER,
        title: String.WORKSHOP
      },
      // {
      //   navigateTo: Routes.NEWS_EXPLORER,
      //   title: String.NEWSLETTERS,
      // },

      {
        navigateTo: Routes.BLOG,
        title: String.BLOGS
      },
      // {
      //   navigateTo: Routes.WEBINAR_EXPLORER,
      //   title: String.WEBINAR,
      // },
      {
        navigateTo: STORE_URL?.STORE_BASE_URL,
        title: String.YUVIPEP_STORE
      }
    ]
  },
  {
    sectionTitle: 'Information',
    footerLinks: [
      {
        navigateTo: Routes.FAQ,
        title: 'FAQ'
      },
      {
        navigateTo: Routes.TERMS_OF_USE,
        title: 'Terms of Use'
      },
      {
        navigateTo: Routes.PRIVACY_POLICY,
        title: 'Privacy Policy'
      }
    ]
  }
];
export default footerValue;
