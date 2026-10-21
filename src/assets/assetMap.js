/**
 * Centralized Asset Mapping for TWO 26 Clone
 * All original 96 assets mapped with exact filenames, roles, and dimensions
 */

export const assetMap = {
  // Brand & Kinetic Identity
  brand: {
    logoWordmarkCream: "/assets/download (18).svg", // "TWO 26" header wordmark (cream #F8EEE8, viewBox="0 0 127 28")
    logoWordmarkOrange: "/assets/download (19).svg", // "TWO 26" header wordmark (orange #FF5400, viewBox="0 0 127 28")
    logoKineticSvg: "/assets/download (2).svg", // Kinetic two26 logo with ribbon & animated letters (viewBox="0 0 1451 1004")
    loaderBgStrokes: "/assets/download (3).svg", // Loader backdrop strokes (viewBox="0 0 1500 1093")
    footerWordmark: "/assets/download (8).svg", // Massive footer "TWO 26" wordmark (viewBox="0 0 1400 309")
    footerTexture: "/assets/imgi_29_6aaad679fdb9d914f7f52067_footer-texture.svg", // Linework loops texture in footer
  },

  // Interactive UI & Controls
  controls: {
    toggleSvg: "/assets/download (7).svg", // Morphing hamburger/close toggle (viewBox="-2 6.52 36 36")
    closeIcon: "/assets/download (6).svg", // 8x8 X close icon
    navUnderlineScribble: "/assets/download.svg", // 75x36 hand-drawn scribble underline for nav links
    menuSwirlPath: "/assets/download (4).svg", // 998x901 decorative swirl stroke inside mobile menu
    arrowDiagonal20: "/assets/download (5).svg", // 20x20 diagonal arrow
    arrowDiagonal10: "/assets/download (24).svg", // 10x10 diagonal arrow
    arrowDiagonal8: "/assets/download (25).svg", // 8x8 diagonal arrow
    arrowUpRight15: "/assets/download (23).svg", // 15x18 arrow used in testimonials
    toggleNodeOrange: "/assets/download (9).svg", // 33x38 glowing orange node button
    toggleNodeInactive: "/assets/download (10).svg", // 33x38 inactive node button
    badge26: "/assets/download (20).svg", // "26" badge for FAQ items (viewBox="0 124.4 340 184.5")
    linkedin: "/assets/download (21).svg", // LinkedIn social icon
    instagram: "/assets/download (22).svg", // Instagram social icon
    contactSticker: "/assets/imgi_1_6aaad679fdb9d914f7f5206b_contact.svg", // Contact modal sticker graphic
  },

  // Hero Section
  hero: {
    video: "/assets/People_and_cats_walking_1080p_20261021130841.mp4", // Two characters walking with sandwich boards and cats 1080p MP4
    illustration: "/assets/People_and_cats_walking_1080p_20261021130841.mp4",
    poster: "/assets/People_and_cats_walking_20261021123936.gif",
    loopLeft: "/assets/download (15).svg", // Left edge orange curved loop entering hero (viewBox="0 0 229 599")
    loopRight: "/assets/download (13).svg", // Right edge orange curved loop entering hero (viewBox="0 0 354 487")
  },

  // Showcase Slider (Between Editorial and Selected Works)
  showcase: {
    shot1Basketball: "/assets/imgi_103_6aaad679fdb9d914f7f52049%2F6ab26381b5a759b6db4cec12_Shot 1_poster.0000000.jpg",
    shot2Dining: "/assets/imgi_2_6ab263498b14a38a7a109afc_Shot 2.jpg",
    shot3Astronaut: "/assets/imgi_104_6aaad679fdb9d914f7f52049%2F6ab263f29cc7204d5832b66d_Shot 3_poster.0000000.jpg",
    shot4Skate: "/assets/imgi_3_6ab2633da8fa39ec5216880b_Shot 4.jpg",
    shot5Urban: "/assets/imgi_4_6ab2633d3e5b6a35a15d74d7_Shot 5.jpg",
    shot6GummyCanister: "/assets/imgi_42_6ab2634dc8995221637e120c_Shot 6-p-800.png",
  },

  // Projects / Selected Works (Websites We Made)
  projects: [
    {
      id: "quick-realty",
      title: "Quick Realty",
      category: "Real Estate & Architecture, Web Development",
      colorDot: "#0576fc",
      image: "/assets/work/Quick-Realty-Developers(work).png",
      link: "https://realstate-eight-zeta.vercel.app/",
      tag: "REAL ESTATE",
    },
    {
      id: "manohar-dental",
      title: "Manohar Dental",
      category: "Healthcare & Clinic, Web Experience",
      colorDot: "#00BAFF",
      image: "/assets/work/ManoharDental(work).png",
      link: "https://manohardentalvisakhapatnam.com/",
      tag: "HEALTHCARE",
    },
    {
      id: "kodewar",
      title: "Kodewar",
      category: "Digital Marketing, Creative Agency",
      colorDot: "#E24A2A",
      image: "/assets/work/kodewar-digitalMarketing(work).png",
      link: "https://www.kodewar.com/",
      tag: "DIGITAL MARKETING",
    },
    {
      id: "telugu-yuvatha",
      title: "Telugu Yuvatha",
      category: "E-Commerce, Community Platform",
      colorDot: "#F5A623",
      image: "/assets/work/TeluguYuvatha-ecommerce(work).png",
      link: "https://telugu-yuvatha-client.vercel.app/",
      tag: "E-COMMERCE",
    },
    {
      id: "bora",
      title: "Bora Footwear",
      category: "Footwear Brand, E-Commerce Experience",
      colorDot: "#111111",
      image: "/assets/work/Bora-shoe ecommerce(work).png",
      link: "https://bora-client.vercel.app/",
      tag: "FASHION & RETAIL",
    },
    {
      id: "moms-halwa",
      title: "Mom's Halwa",
      category: "Food & Beverage, Artisan Brand",
      colorDot: "#D97706",
      image: "/assets/work/moms-halwa(work).png",
      link: "https://moms-halwa.vercel.app/",
      tag: "FOOD & BEVERAGE",
    },
    {
      id: "mammu-interiors",
      title: "Mammu Interiors",
      category: "Interior Architecture, Spatial Design",
      colorDot: "#8B5CF6",
      image: "/assets/work/mammu interiors(work).png",
      link: "https://mammu.vercel.app/",
      tag: "INTERIOR DESIGN",
    },
    {
      id: "royal-luxury-thai-spa",
      title: "Royal Luxury Thai Spa",
      category: "Wellness, Luxury Spa Experience",
      colorDot: "#059669",
      image: "/assets/work/ROYAL LUXURY THAI SPA(work).png",
      link: "https://spa-woad-three.vercel.app/",
      tag: "WELLNESS & SPA",
    },
    {
      id: "hocl-labs",
      title: "HOCL Labs",
      category: "Biotech & Diagnostics, Corporate Web",
      colorDot: "#2563EB",
      image: "/assets/work/hocllabs(work).png",
      link: "https://www.hocllabs.com/",
      tag: "BIOTECH & LABS",
    },
    {
      id: "elenor-spa",
      title: "Elenor International Spa",
      category: "Luxury Hospitality, Premium Wellness",
      colorDot: "#D4AF37",
      image: "/assets/work/elenorinternationalspa.png",
      link: "https://elenorinternationalspa.com/",
      tag: "LUXURY HOSPITALITY",
    },
  ],

  // Branding & Packaging Projects (Dedicated Section)
  packagingProjects: [
    {
      id: "the-bagel-bar",
      title: "The Bagel Bar",
      category: "Food & Beverage, Brand Identity",
      colorDot: "#005BF8",
      image: "/assets/imgi_11_6ab2675e0b996d1415be46a3_The Bagel Bar.png",
      hoverImage: "/assets/imgi_9_6ab270be80849a0a23faa24a_6ab2707cc2a53666310f52d2_Bagel_2_hover.jpg",
      tag: "FOOD & BEVERAGE",
    },
    {
      id: "heygluco",
      title: "HeyGluco",
      category: "Health & Wellness, Product Packaging",
      colorDot: "#FF3366",
      image: "/assets/imgi_8_6ab266d33e964df940c04833_HeyGluco.png",
      hoverImage: "/assets/imgi_7_6ab392697fe7cc9c077d1bb5_HeyGluco_2_hover.jpg",
      tag: "HEALTH & WELLNESS",
    },
    {
      id: "tanti-maria",
      title: "Tanti Maria",
      category: "Food & Retail, Packaging Design",
      colorDot: "#E25227",
      image: "/assets/imgi_14_6ab266e293685f22fedc573a_Tanti Maria.png",
      hoverImage: "/assets/imgi_12_6ab2723d53bb370f04afa391_6ab2722d77656a8e8b50e941_Tanti_2_hover.jpg",
      tag: "FOOD & RETAIL",
    },
    {
      id: "yum-yum",
      title: "Yum Yum",
      category: "Food & Beverage, Artisan Packaging",
      colorDot: "#4D2C5E",
      image: "/assets/imgi_23_6ab266f1e1ea593718edc309_YumYum.png",
      hoverImage: "/assets/imgi_21_6ab2723d53bb370f04afa372_6ab2723985afb9378f444d8b_YumYum_2_hover.jpg",
      tag: "FOOD & BEVERAGE",
    },
    {
      id: "lp-one",
      title: "LP One",
      category: "Automotive & Motorsport, Merchandise",
      colorDot: "#E11D48",
      image: "/assets/imgi_17_6ab2674fed9b5a030f520afb_LP1.png",
      hoverImage: "/assets/imgi_15_6ab270be80849a0a23faa247_6ab27084a6716c1b6c77a89d_lp1_Thumbnail2_hover.jpg",
      tag: "AUTOMOTIVE",
    },
    {
      id: "mvp-agency",
      title: "MVP Agency",
      category: "Sports & Talent, Visual Identity",
      colorDot: "#1E293B",
      image: "/assets/imgi_20_6ab26733f2ee3f3da2d70eeb_MVP.png",
      hoverImage: "/assets/imgi_18_6ab270be80849a0a23faa29e_6ab27093a089e1fd370a7310_MVP_Thumbnail2_hover.jpg",
      tag: "SPORTS AGENCY",
    },
  ],

  // Project Card Decorative SVG Loops
  cardHoverLoop: "/assets/download (14).svg", // Loop line on hover (viewBox="0 0 728 1020")

  // Services Section (This Is Our Thing)
  services: {
    desktopPathSvg: "/assets/download (11).svg", // Original animated winding line (viewBox="0 0 1616 2187")
    mobilePathSvg: "/assets/download (16).svg", // Mobile vertical snake line (viewBox="0 0 407 1556")
  },

  // Testimonials
  testimonials: [
    {
      quote: "Working with Bogdan and Dan has been one of the smoothest collaborations we've had.",
      name: "Ruxandra",
      role: "Founder, HeyGluco",
      avatar: "/assets/imgi_24_6ab3d538dbdbc6a5f1d1d3f4_Rux.jpg",
    },
    {
      quote: "WebCraft gave our brand the exact edge and identity it needed to dominate the market.",
      name: "Luiza",
      role: "Creative Director, The Bagel Bar",
      avatar: "/assets/imgi_25_6ab3d1f99d28cf11d2e8f501_luiza.jpg",
    },
    {
      quote: "Super detail-oriented, visionary design team. Can't recommend them highly enough.",
      name: "Vlad",
      role: "Co-Founder, MVP Agency",
      avatar: "/assets/imgi_26_6ab3d5ec9cfd634776e95758_Vlad.jpg",
    },
    {
      quote: "They understood our vision from day one and executed flawlessly.",
      name: "Ionut",
      role: "Brand Lead, LP1",
      avatar: "/assets/imgi_27_6ab3d72a667c6ab560a03d5b_Ionut.jpg",
    },
    {
      quote: "The brand identity WebCraft created received endless compliments from all our customers.",
      name: "Monica",
      role: "Founder, Tanti Maria",
      avatar: "/assets/imgi_28_6ab3d7f19cfd634776eaf212_Monica.jpg",
    },
  ],

  // FAQ Section
  faq: {
    illustration: "/assets/download (1).svg", // Dog scratching head illustration (viewBox="0 0 559 358")
    badge: "/assets/download (20).svg", // "26" number badge
  },
};
