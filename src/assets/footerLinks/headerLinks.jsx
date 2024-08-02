import React from "react";
import Strings from "../../constants/strings/Strings";
import Routes from "../../constants/routes/routes";
const innovationCourseWithId = [Routes.INNOVATION_ENGINEER];
const bookAFreeClassBtnHide = [
  Routes.LIVE_ONLINE_CLASS,
  Routes.INTERACTIVE_ONLINE_CLASS,
  Routes.SOFTWARE_PRODUCT_ENG,
];

const coursesNav = [
  Routes.INTERACTIVE_ONLINE_CLASS,
  Routes.INNOVATION_ENGINEER,
  Routes.CATEGORY,
  Routes.INNOVATION_COURSE_V2,
  Routes.LIVE_ONLINE_CLASS,
  Routes.COURSE_LIST,
  Routes.SOFTWARE_PRODUCT_ENG,
];

const discoverNav = [
  Routes.WEEKLY_QUIZ,
  Routes.NEWSLETTER_QUIZ,
  Routes.WORKSHOP_EXPLORER,
  Routes.CAREERS,
  Routes.NEWS_EXPLORER,
  Routes.BLOG,
  // Routes.WEBINAR_EXPLORER,
];
const institutuionNav = [
  Routes.INSTITUTION,
  Routes.GENERIC_LAB,
];

const headerForMobile = [
  {
    sectionTitle: "",
    links: [
      {
        route: Routes.HOME,
        text: Strings.HOME,
      },
      {
        route: Routes.ABOUT_US,
        text: Strings.ABOUT_US,
      },
      {
        route: Routes.INSTITUTION,
        text: Strings.INSTITUTION,
      },
      {
        route: Routes.INNOVATION_LAB,
        text: Strings.INNOVATION_LAB,
      },
    ],
  },
  {
    sectionTitle: "Courses",
    links: [
      {
        route: Routes.INNOVATION_COURSE_V2,
        text: Strings.BASE_INNOVATION_COURSE,
      },
      {
        route: Routes.INNOVATION_ENGINEER,
        text: Strings.INNOVATION_ENGINEER,
      },
      {
        route: Routes.INTERACTIVE_ONLINE_CLASS,
        text: Strings.INTERACTIVE_ONLINE_CLASS,
      },
      {
        route:
          Routes.LIVE_ONLINE_CLASS + "?id=" + Strings.YOUNG_DIRECTOR_PROGRAM_ID,
        text: Strings.YOUNG_DIRECTOR_PROGRAM,
      },
      {
        route:
          Routes.LIVE_ONLINE_CLASS + "?id=" + Strings.CORE_JAVA_PROGRAM_SLUG,
        text: Strings.CORE_JAVA_PROGRAM,
      },
      {
        route: Routes.LIVE_ONLINE_CLASS + "?id=" + Strings.PYTHON_PROGRAM_SLUG,
        text: Strings.PYTHON_PROGRAM,
      },
      {
        route: Routes.SOFTWARE_PRODUCT_ENG,
        text: Strings.SOFTWARE_PRODUCT_ENG,
      },
      // {
      //   route: Routes.CATEGORY,
      //   text: Strings.ONLINE_SELF_COURSES,
      // },
    ],
  },
  {
    sectionTitle: "For School",
    links: [
      {
        route: Routes.INSTITUTION,
        text: Strings.BASE_INNOVATION_COURSE,
      },
      {
        route: Routes.GENERIC_LAB,
        text: Strings.INNOVATION_LAB_GENERAL,
      },
    ],
  },
  // {
  //   sectionTitle: "Careers",
  //   links: [{ route: Routes.CAREERS, text: Strings.CAREERS }],
  // },
  {
    sectionTitle: "Discover",
    links: [
      {
        route: Routes.NEWS_SUBSCRIPTION,
        text: Strings.NEWS_SUBSCRIPTION,
      },
      {
        route: Routes.PROJECT_ASSISTANCE,
        text: Strings.PROJECT_ASSISTANCE,
      },
      {
        route: Routes.CAREERS,
        text: Strings.CAREERS,
      },
      {
        route: Routes.WEEKLY_QUIZ,
        text: Strings.WEEKLY_INNOVATION_QUIZ,
      },
      {
        route: Routes.NEWSLETTER_QUIZ,
        text: Strings.NEWSLETTERS_INNOVATION_QUIZ,
      },
      {
        route: Routes.PRESS_RELEASE,
        text: Strings.PRESS_RELEASE,
      },
      {
        route: Routes.WORKSHOP_EXPLORER,
        text: Strings.WORKSHOP,
      },
      {
        route: Routes.NEWS_EXPLORER,
        text: Strings.NEWSLETTERS,
      },
      {
        route: Routes.BLOG,
        text: Strings.BLOGS,
      },
      // {
      //   route: Routes.WEBINAR_EXPLORER,
      //   text: Strings.WEBINAR,
      // },
    ],
  },
];

const headerForMobileWithLogin = [
  {
    sectionTitle: "",
    links: [
      {
        route: Routes.HOME,
        text: Strings.HOME,
      },
      {
        route: Routes.ABOUT_US,
        text: Strings.ABOUT_US,
      },
      {
        route: Routes.INSTITUTION,
        text: Strings.INSTITUTION,
      },
      {
        route: Routes.INNOVATION_LAB,
        text: Strings.INNOVATION_LAB,
      },
    ],
  },
  {
    sectionTitle: "My Account",
    links: [
      {
        route: Routes.PROFILE,
        text: Strings.PROFILE,
      },
      {
        route: Routes.MY_LEARNING,
        text: Strings.MY_LEARNING,
      },
      {
        route: Routes.SUBCRIBE_COURSES,
        text: Strings.MY_COURSES,
      },
    ],
  },
  {
    sectionTitle: "Courses",
    links: [
      {
        route: Routes.INNOVATION_COURSE_V2,
        text: Strings.BASE_INNOVATION_COURSE,
      },
      {
        route: Routes.INNOVATION_ENGINEER,
        text: Strings.INNOVATION_ENGINEER,
      },
      {
        route: Routes.INTERACTIVE_ONLINE_CLASS,
        text: Strings.INTERACTIVE_ONLINE_CLASS,
      },
      {
        route:
          Routes.LIVE_ONLINE_CLASS + "?id=" + Strings.CORE_JAVA_PROGRAM_SLUG,
        text: Strings.CORE_JAVA_PROGRAM,
      },
      {
        route:
          Routes.LIVE_ONLINE_CLASS + "?id=" + Strings.YOUNG_DIRECTOR_PROGRAM_ID,
        text: Strings.YOUNG_DIRECTOR_PROGRAM,
      },
      {
        route: Routes.LIVE_ONLINE_CLASS + "?id=" + Strings.PYTHON_PROGRAM_SLUG,
        text: Strings.PYTHON_PROGRAM,
      },
      {
        route: Routes.SOFTWARE_PRODUCT_ENG,
        text: Strings.SOFTWARE_PRODUCT_ENG,
      },
      // {
      //   route: Routes.CATEGORY,
      //   text: Strings.ONLINE_SELF_COURSES,
      // },
    ],
  },
  {
    sectionTitle: "For School",
    links: [
      {
        route: Routes.INSTITUTION,
        text: Strings.BASE_INNOVATION_COURSE,
      },
      {
        route: Routes.GENERIC_LAB,
        text: Strings.INNOVATION_LAB_GENERAL,
      },
    ],
  },
  // {
  //   sectionTitle: "Careers",
  //   links: [{ route: Routes.CAREERS, text: Strings.CAREERS }],
  // },
  {
    sectionTitle: "Discover",
    links: [
      {
        route: Routes.NEWS_SUBSCRIPTION,
        text: Strings.NEWS_SUBSCRIPTION,
      },
      {
        route: Routes.WEEKLY_QUIZ,
        text: Strings.WEEKLY_INNOVATION_QUIZ,
      },
      {
        route: Routes.NEWSLETTER_QUIZ,
        text: Strings.NEWSLETTERS_INNOVATION_QUIZ,
      },
      {
        route: Routes.WORKSHOP_EXPLORER,
        text: Strings.WORKSHOP,
      },
      {
        route: Routes.CAREERS,
        text: Strings.CAREERS,
      },
      {
        route: Routes.NEWS_EXPLORER,
        text: Strings.NEWSLETTERS,
      },
      {
        route: Routes.BLOG,
        text: Strings.BLOGS,
      },
      // {
      //   route: Routes.WEBINAR_EXPLORER,
      //   text: Strings.WEBINAR,
      // },
    ],
  },
];
const headerValue = [
  {
    route: Routes.HOME,
    text: Strings.HOME,
  },
  {
    route: Routes.ABOUT_US,
    text: Strings.ABOUT_US,
  },
  {
    route: "/",
    text: Strings.COURSES,
    dropdownType: "course",
    subRoute: [
      {
        sectionTitle: Strings.COURSE_DROPDOWN_SCHOOL_TITLE,
        links: [
          {
            route: Routes.INNOVATION_COURSE_V2,
            text: Strings.BASE_INNOVATION_COURSE,
          },
          {
            route: Routes.INTERACTIVE_ONLINE_CLASS,
            text: Strings.INTERACTIVE_ONLINE_CLASS,
          },
        ],
      },
      {
        sectionTitle: Strings.COURSE_DROPDOWN_GRADE_5,
        links: [
          {
            route:
              Routes.LIVE_ONLINE_CLASS +
              "?id=" +
              Strings.YOUNG_DIRECTOR_PROGRAM_ID,
            text: Strings.YOUNG_DIRECTOR_PROGRAM,
          },
          {
            route:
              Routes.LIVE_ONLINE_CLASS +
              "?id=" +
              Strings.CORE_JAVA_PROGRAM_SLUG,
            text: Strings.CORE_JAVA_PROGRAM,
          },
          {
            route:
              Routes.LIVE_ONLINE_CLASS + "?id=" + Strings.PYTHON_PROGRAM_SLUG,
            text: Strings.PYTHON_PROGRAM,
          },
        ],
      },
      {
        sectionTitle: Strings.COURSE_DROPDOWN_COLLEGE_TITLE,
        links: [
          {
            route: Routes.INNOVATION_ENGINEER,
            text: Strings.INNOVATION_ENGINEER,
          },
          {
            route: Routes.SOFTWARE_PRODUCT_ENG,
            text: Strings.SOFTWARE_PRODUCT_ENG,
          },
          // {
          //   route: Routes.CATEGORY,
          //   text: Strings.ONLINE_SELF_COURSES,
          // },
        ],
      },
    ],
  },
  {
    route: "/",
    text: Strings.INSTITUTION,
    dropdownType: "institution",
    subRoute: [
      {
        route: Routes.INSTITUTION,
        text: Strings.BASE_INNOVATION_COURSE,
      },
      {
        route: Routes.GENERIC_LAB,
        text: Strings.INNOVATION_LAB_GENERAL,
      }
    ],
  },
  {
    route: Routes.NEWS_SUBSCRIPTION,
    text: Strings.NEWS_SUBSCRIPTION,
  },
  {
    route: "/",
    text: Strings.DISCOVER,
    dropdownType: "discover",
    subRoute: [
      {
        route: Routes.PROJECT_ASSISTANCE,
        text: Strings.PROJECT_ASSISTANCE,
      },
      {
        route: Routes.WEEKLY_QUIZ,
        text: Strings.WEEKLY_INNOVATION_QUIZ,
      },
      {
        route: Routes.NEWSLETTER_QUIZ,
        text: Strings.NEWSLETTERS_INNOVATION_QUIZ,
      },
      {
        route: Routes.CAREERS,
        text: Strings.CAREERS,
      },
      {
        route: Routes.PRESS_RELEASE,
        text: Strings.PRESS_RELEASE,
      },
      {
        route: Routes.INNOVATION_LAB,
        text: Strings.INNOVATION_LAB,
      },
      {
        route: Routes.WORKSHOP_EXPLORER,
        text: Strings.WORKSHOP,
      },
      // {
      //   route: Routes.NEWS_EXPLORER,
      //   text: Strings.NEWSLETTERS,
      // },
      {
        route: Routes.BLOG,
        text: Strings.BLOGS,
      },
      // {
      //   route: Routes.WEBINAR_EXPLORER,
      //   text: Strings.WEBINAR,
      // },
    ],
  },
];
const headerLoggedInDropdown = [
  {
    route: Routes.ACCOUNT_PROFILE,
    text: Strings.ACCOUNT,
  },
  // {
  //   route: Routes.WEBINAR_EXPLORER,
  //   text: Strings.WEBINAR,
  // },
];
export {
  headerValue,
  headerLoggedInDropdown,
  innovationCourseWithId,
  coursesNav,
  discoverNav,
  headerForMobile,
  headerForMobileWithLogin,
  bookAFreeClassBtnHide,
  institutuionNav,
  // careerNav,
};
