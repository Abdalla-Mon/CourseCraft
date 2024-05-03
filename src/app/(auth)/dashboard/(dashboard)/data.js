export const data = [
  // Instructor specific pages
  {
    id: 8,
    text: "My Courses",
    href: "/dashboard/courses",
    role: ["instructor"],
  },
  {
    id: 9,
    text: "Create Course",
    href: "/dashboard/create-course",
    role: ["instructor"],
  },
  {
    id: 10,
    text: "Create Quiz",
    href: "/dashboard/create-quiz",
    role: ["instructor"],
  },
  // Shared pages
  {
    id: 2,
    text: "Profile",
    href: "/dashboard/profile",
    role: ["student", "instructor"],
  },
  {
    id: 1,
    text: "Enrolled Courses",
    href: "/dashboard/enrolled-courses",
    role: ["student", "instructor"],
  },
  {
    id: 3,
    text: "Finished Courses",
    href: "/dashboard/finished-courses",
    role: ["student", "instructor"],
  },
  {
    id: 4,
    text: "Certificates",
    href: "/dashboard/certificates",
    role: ["student", "instructor"],
  },
  {
    id: 6,
    text: "Purchased Courses",
    href: "/dashboard/purchased-courses",
    role: ["student", "instructor"],
  },
  {
    id: 5,
    text: "Favourite Courses",
    href: "/dashboard/favourites",
    role: ["student", "instructor"],
  },
  {
    id: 7,
    text: "Quiz Results",
    href: "/dashboard/quiz-results",
    role: ["student", "instructor"],
  },
  // Admin specific pages
  {
    id: 11,
    text: "All Courses",
    href: "/dashboard/all-courses",
    role: ["admin"],
  },
  {
    id: 12,
    text: "All Users",
    href: "/dashboard/users",
    role: ["admin"],
  },
  {
    id: 13,
    text: "Categories",
    href: "/dashboard/categories",
    role: ["admin"],
  },
  {
    id: 14,
    text: "Create Category",
    href: "/dashboard/create-category",
    role: ["admin"],
  },
  {
    id: 15,
    text: "Approve Instructors",
    href: "/dashboard/approve-instructors",
    role: ["admin"],
  },
  // Logout button for all roles
  {
    id: 16,
    text: "Logout",
    href: "/logout",
    type: "button",
    role: ["student", "instructor", "admin"],
  },
];
