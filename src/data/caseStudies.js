/**
 * Centralized Reusable Case Study Data Module
 * Fully data-driven: adding new projects requires no template component modifications.
 */

export const caseStudies = {
  mvp: {
    slug: 'mvp',
    placeholder: false,
    title: 'MVP',
    displayTitle: 'MVP',
    category: 'Brand Identity',
    client: 'MVP Agency',
    year: '2024 — Present',
    tags: ['Brand Identity', 'Sportswear', 'Art Direction', 'Visual Identity'],
    heroImage: '/assets/projects/mvp/hero-tennis.jpg',
    heroAlt: 'Monochrome athlete photograph with MVP typography',
    
    // Portfolio copy
    context: {
      title: 'The Context',
      paragraphs: [
        'A comprehensive brand evolution designed to establish an unapologetic identity, high-performance athlete representation, and athletic culture across physical and digital touchpoints.',
        'The scope encompassed dynamic visual design systems, brand guidelines, and experiential campaigns engineered for high-impact resonance across the international sports and culture landscape.',
      ],
    },
    solution: {
      title: 'The Solution',
      paragraphs: [
        'An uncompromising typographic framework, sharp geometric wordmark, and electric-blue signature palette engineered to cut through noise and communicate raw athleticism.',
        'Executed across merchandise, athlete apparel, high-performance accessories, and digital campaign collateral that position the agency at the forefront of the athletic vanguard.',
      ],
    },

    // 12 Visual Blocks in Exact Reference Order (Blocks 4 through 15)
    blocks: [
      // Block 4: Wide image below the solution (MP_AGENCY_landscape2_11.webp)
      {
        id: 'block-4-athlete-branding',
        type: 'wide',
        src: '/assets/projects/mvp/MP_AGENCY_landscape2_11.webp',
        alt: 'MVP Agency high-impact athletic branding and starting-block composition',
        aspectRatio: '16/9',
      },

      // Block 5: Electric-blue close-up of the MVP logo (Vimeo embed)
      {
        id: 'block-5-blue-logo-detail',
        type: 'video',
        vimeoUrl: 'https://player.vimeo.com/video/1228146154?h=377a26975c&background=1&autoplay=1&loop=1&muted=1&playsinline=1',
        title: 'Electric-blue close-up of the MVP logo',
        aspectRatio: '426 / 142',
      },

      // Block 6: Dark blue/black logo composition (Vimeo embed)
      {
        id: 'block-6-dark-logo-composition',
        type: 'video',
        vimeoUrl: 'https://player.vimeo.com/video/1228146157?h=ca30351346&background=1&autoplay=1&loop=1&muted=1&playsinline=1',
        title: 'Dark logo/typography composition on blue',
        aspectRatio: '426 / 162',
      },

      // Block 7: Monochrome lifestyle campaign image
      {
        id: 'block-7-lifestyle-campaign',
        type: 'wide',
        src: '/assets/projects/mvp/imgi_19_6ab270be80849a0a23faa284_6ab270907f6e9d96146209a1_MVP_Thumbnail1.jpg',
        alt: 'Monochrome lifestyle campaign image with MVP branding',
        aspectRatio: '16/9',
      },

      // Block 8: Two-column row: blue cap and branded card
      {
        id: 'block-8-cap-and-card',
        type: 'pair',
        left: {
          src: '/assets/projects/mvp/cap-blue.webp',
          alt: 'Blue sports cap photographed outdoors against architecture',
          aspectRatio: '3/4',
        },
        right: {
          src: '/assets/projects/mvp/card-hand.webp',
          alt: 'Hand holding black branded card against an electric-blue background',
          aspectRatio: '3/4',
        },
      },

      // Block 9: Full-width blue water-bottle product image
      {
        id: 'block-9-water-bottle',
        type: 'wide',
        src: '/assets/projects/mvp/water-bottle.webp',
        alt: 'Full-width blue water-bottle product photograph with white MVP logo',
        aspectRatio: '16/9',
      },

      // Block 10: Wide athlete campaign image
      {
        id: 'block-10-athlete-campaign',
        type: 'wide',
        src: '/assets/projects/mvp/athlete-blue.webp',
        alt: 'Wide sports campaign image featuring an athlete in electric-blue illumination',
        aspectRatio: '16/9',
      },

      // Block 11: Two-column row: Athletic Society brand graphic and blue branded tote bag
      {
        id: 'block-11-athletic-society-and-tote',
        type: 'pair',
        left: {
          src: '/assets/projects/mvp/athletic-society.webp',
          alt: 'Monochrome Athletic Society typography and fabric detail',
          aspectRatio: '3/4',
        },
        right: {
          src: '/assets/projects/mvp/imgi_20_6ab26733f2ee3f3da2d70eeb_MVP.png',
          alt: 'Blue branded tote bag photographed outdoors',
          aspectRatio: '3/4',
        },
      },

      // Block 12: Wide website mockup on a blue background (Vimeo embed)
      {
        id: 'block-12-website-mockup',
        type: 'video',
        vimeoUrl: 'https://player.vimeo.com/video/1228146156?h=dde8ef36a3&background=1&autoplay=1&loop=1&muted=1&playsinline=1',
        title: 'Dark website mockup on a blue background',
        aspectRatio: '426 / 228',
      },

      // Block 13: Two-column model/campaign image row (Vimeo embed)
      {
        id: 'block-13-model-campaign-row',
        type: 'video',
        vimeoUrl: 'https://player.vimeo.com/video/1229232277?h=f7cad06f17&background=1&autoplay=1&loop=1&muted=1&playsinline=1',
        title: 'Two campaign and model images presented in dual composition',
        aspectRatio: '426 / 228',
      },

      // Block 14: Athlete-ambassador campaign artwork (Diana Grigore)
      {
        id: 'block-14-ambassador-diana',
        type: 'wide',
        src: '/assets/projects/mvp/ambassador-diana.webp',
        alt: 'Diana Grigore — Athlete. Ambassador. MVP.',
        aspectRatio: '16/9',
      },

      // Block 15: Second athlete-ambassador campaign artwork (last.webp)
      {
        id: 'block-15-ambassador-david',
        type: 'wide',
        src: '/assets/projects/mvp/last.webp',
        alt: 'David Florian — Athlete. Ambassador. MVP.',
        aspectRatio: '16/9',
      },
    ],
  },

  'yumm-yum': {
    slug: 'yumm-yum',
    placeholder: false,
    title: 'YUMM-YUM',
    displayTitle: 'YUMM-YUM',
    category: 'Brand Identity',
    client: 'Yumm Yum',
    year: '2024 — Present',
    tags: ['Brand Identity', 'Packaging Design', 'Art Direction', 'Visual Identity'],
    heroImage: '/assets/projects/yumm-yum/hero.jpg',
    heroAlt: 'Bottle of organic cold-pressed beverage surrounded by fresh red cherries',

    // Context & Solution
    context: {
      title: 'The Context',
      paragraphs: [
        'An artisanal organic beverage collection designed to bridge functional wellness benefits with playful, tactile packaging and contemporary lifestyle culture.',
        'The scope encompassed developing a cohesive brand identity system, label packaging architecture, custom bottle silhouettes, and campaign direction for a design-forward beverage line.',
      ],
    },
    solution: {
      title: 'The Solution',
      paragraphs: [
        'A vibrant visual universe uniting expressive typography, saturated fruit hues, and tactile paper finishes with an iconic modular wordmark.',
        'From sustainable glass packaging and branded delivery logistics to outdoor billboards and lifestyle merchandise, the identity system communicates raw flavour and vibrant energy across every touchpoint.',
      ],
    },

    // Visual Blocks in Exact Reference Order
    blocks: [
      // Block 1: Wide 1 - Bottle and drink on white tray (imgi_3)
      {
        id: 'block-1-bottle-tray',
        type: 'wide',
        src: '/assets/projects/yumm-yum/wide-1-bottle-tray.webp',
        alt: 'Yumm Yum beverage bottle with glass and fresh fruit on a stone tray',
        aspectRatio: '16/9',
      },

      // Block 2: Two-column Pair - Moody lifestyle bottle (imgi_17) + Centered logo mark animation video (Vimeo embed)
      {
        id: 'block-2-lifestyle-and-logo-video',
        type: 'pair',
        left: {
          src: '/assets/projects/yumm-yum/mood-lifestyle.webp',
          alt: 'Atmospheric product bottle lifestyle photography',
          aspectRatio: '1/1',
        },
        right: {
          vimeoUrl: 'https://player.vimeo.com/video/1229232293?h=0ba8619de1&background=1&autoplay=1&loop=1&muted=1&playsinline=1',
          title: 'Yumm Yum animated brand logo mark on lilac background',
          aspectRatio: '1/1',
        },
      },

      // Block 3: Wide 2 - Overhead table scene with circular label (imgi_4)
      {
        id: 'block-3-overhead-table',
        type: 'wide',
        src: '/assets/projects/yumm-yum/wide-2-overhead-table.webp',
        alt: 'Overhead flatlay scene showing Yumm Yum drink, snack table, and circular branded coaster',
        aspectRatio: '16/9',
      },

      // Block 4: Two-column Pair A - Branded tote bag (imgi_5) + Hand holding business card (imgi_6)
      {
        id: 'block-4-tote-and-card',
        type: 'pair',
        left: {
          src: '/assets/projects/yumm-yum/two-a-left-tote-bag.webp',
          alt: 'Lilac branded tote bag with playful Yumm Yum typographic print',
          aspectRatio: '3/4',
        },
        right: {
          src: '/assets/projects/yumm-yum/two-a-right-card-hand.webp',
          alt: 'Hand holding tactile black and lilac brand business card',
          aspectRatio: '3/4',
        },
      },

      // Block 5: Wide 3 - Outdoor advertising billboard (imgi_7)
      {
        id: 'block-5-billboard',
        type: 'wide',
        src: '/assets/projects/yumm-yum/wide-3-billboard.webp',
        alt: 'Outdoor three-panel billboard campaign posters mounted on an urban stone wall',
        aspectRatio: '16/9',
      },

      // Block 6: Two-column Pair B - Person seated outdoors (imgi_8) + Minimalist brand stationery (imgi_35)
      {
        id: 'block-6-seated-and-stationery',
        type: 'pair',
        left: {
          src: '/assets/projects/yumm-yum/two-b-left-seated-lifestyle.webp',
          alt: 'Person seated outside in warm sunlight enjoying a cold beverage',
          aspectRatio: '3/4',
        },
        right: {
          src: '/assets/projects/yumm-yum/two-b-right-stationery.jpg',
          alt: 'Minimalist brand stationery and packaging system',
          aspectRatio: '3/4',
        },
      },

      // Block 7: Wide 4 - Product advertising and packaging composition (imgi_10)
      {
        id: 'block-7-product-composition',
        type: 'wide',
        src: '/assets/projects/yumm-yum/wide-4-product-composition.webp',
        alt: 'Product advertising campaign featuring bottle layouts and packaging arrangements',
        aspectRatio: '16/9',
      },

      // Block 8: Two-column Pair C - Dark boxes (imgi_11) + Pink and black packaging tape (imgi_12)
      {
        id: 'block-8-boxes-and-tape',
        type: 'pair',
        left: {
          src: '/assets/projects/yumm-yum/two-c-left-boxes-dark.webp',
          alt: 'Stacked pink packaging boxes on a deep contrast background',
          aspectRatio: '3/4',
        },
        right: {
          src: '/assets/projects/yumm-yum/two-c-right-packaging-tape.webp',
          alt: 'Detail of branded packaging tape and shipping box packaging',
          aspectRatio: '3/4',
        },
      },

      // Block 9: Two-column Pair D - Branded cap in red bowl (imgi_41) + Product bottle photo (imgi_47)
      {
        id: 'block-9-cap-and-bottle',
        type: 'pair',
        left: {
          src: '/assets/projects/yumm-yum/two-d-left-cap-bowl.jpg',
          alt: 'Embroidered lilac brand cap nestled inside a red ceramic bowl',
          aspectRatio: '3/4',
        },
        right: {
          src: '/assets/projects/yumm-yum/two-d-right-bottle-photo.jpg',
          alt: 'Angled product photography of beverage bottle on lilac surface',
          aspectRatio: '3/4',
        },
      },

      // Block 10: Two-column Pair E - Outdoor drink lifestyle (imgi_15) + Grape brand graphic (imgi_16)
      {
        id: 'block-10-lifestyle-and-grape',
        type: 'pair',
        left: {
          src: '/assets/projects/yumm-yum/wide-5-lifestyle-drink.webp',
          alt: 'Outdoor beverage lifestyle photograph in natural sunlight',
          aspectRatio: '3/4',
        },
        right: {
          src: '/assets/projects/yumm-yum/wide-6-grape-graphic.webp',
          alt: 'Grape brand illustration and visual identity graphic poster',
          aspectRatio: '3/4',
        },
      },
    ],
  },

  merci: {
    slug: 'merci',
    placeholder: false,
    title: 'MERCI',
    displayTitle: 'MERCI',
    category: 'Brand Identity',
    client: 'Merci Patisserie',
    year: '2024 — Present',
    tags: ['Brand Identity', 'Visual Identity', 'Art Direction', 'Brand Strategy'],
    heroImage: '/assets/projects/merci/hero.jpg',
    heroAlt: 'Artisan pastry culinary presentation on ceramic tableware',

    // Neutral editorial copy
    context: {
      title: 'The Context',
      paragraphs: [
        'An artisanal patisserie and confectionery brand founded on timeless French techniques, contemporary culinary experimentation, and tactile hospitality rituals.',
        'The objective was to craft a comprehensive visual identity, packaging ecosystem, retail touchpoints, and brand voice that position the studio at the intersection of refined tradition and modern indulgence.',
      ],
    },
    solution: {
      title: 'The Solution',
      paragraphs: [
        'A warm, typographic identity anchored by an iconic circular monogram, bespoke packaging finishes, and custom embossed ribbons tailored for distinctive unboxing experiences.',
        'The scope extended across retail store signage, bespoke pastry boxes, ingredient storytelling menus, and lifestyle merchandise that embody handcrafted excellence across every customer touchpoint.',
      ],
    },

    // Step 3 Section 4: Banner
    banner: {
      src: '/assets/projects/merci/banner.webp',
      alt: 'Warm chocolate drizzled over delicate artisan pastries',
      captionLeft: 'Artisan Pastry & Confectionery',
      captionRight: 'Crafted Daily',
      aspectRatio: '1.84/1',
    },

    // Horizontal full-width video 1 in place of logo mark
    logoVideo1: {
      vimeoUrl: 'https://player.vimeo.com/video/1228105219?h=92871506e2&background=1&autoplay=1&loop=1&muted=1&playsinline=1',
      title: 'Merci vertical artisan pastry motion study',
      aspectRatio: '426 / 156',
    },

    // Horizontal full-width video 2 below video 1
    logoVideo2: {
      vimeoUrl: 'https://player.vimeo.com/video/1228105218?h=21facd3417&background=1&autoplay=1&loop=1&muted=1&playsinline=1',
      title: 'Merci three artisan eclairs presentation video',
      aspectRatio: '426 / 238',
    },

    // Curved text section with real background image
    curvedText: {
      src: '/assets/projects/merci/curved-text-bg.webp',
      alt: 'Artisan packaging and chocolate pastry composition',
      text: 'Artisan Patisserie • Crafted Daily •',
      aspectRatio: '1.8/1',
    },

    // Content Blocks in exact reference screenshot sequence
    blocks: [
      // Block 1: Two-A - Apron (imgi_4) + Pastry box (imgi_5)
      {
        id: 'block-two-a',
        type: 'two',
        ratio: 'portrait',
        left: {
          src: '/assets/projects/merci/two-a-left.webp',
          alt: 'Caramel-toned barista work apron with embroidered brand insignia',
          aspectRatio: '0.57/1',
        },
        right: {
          src: '/assets/projects/merci/two-a-right.webp',
          alt: 'Artisan pastry box held by team member in culinary setting',
          aspectRatio: '0.57/1',
        },
      },

      // Block 2: Wide-1 - Packaging box (imgi_6)
      {
        id: 'block-wide-1',
        type: 'wide',
        src: '/assets/projects/merci/wide-1.webp',
        alt: 'Bespoke pastry packaging box with embossed seal closure',
        aspectRatio: '1.85/1',
      },

      // Block 3: Wide-2 - Packaging box and tape (imgi_7)
      {
        id: 'block-wide-2',
        type: 'wide',
        src: '/assets/projects/merci/wide-2.webp',
        alt: 'Modular pastry boxes and custom patterned brand tape',
        aspectRatio: '1.85/1',
      },

      // Block 4: Two-B - Outdoor sign (imgi_8) + Cards in caramel (imgi_9)
      {
        id: 'block-two-b',
        type: 'two',
        ratio: 'portrait',
        left: {
          src: '/assets/projects/merci/two-b-left.webp',
          alt: 'Circular storefront blade sign mounted on historic architecture',
          aspectRatio: '0.57/1',
        },
        right: {
          src: '/assets/projects/merci/two-b-right.webp',
          alt: 'Branded stationery cards submerged in rich golden caramel',
          aspectRatio: '0.57/1',
        },
      },

      // Block 5: Wide-3 - Folded wrapping paper (imgi_10)
      {
        id: 'block-wide-3',
        type: 'wide',
        src: '/assets/projects/merci/wide-3.webp',
        alt: 'Folded sheets of custom brand wrapping paper with alternating logo pattern',
        aspectRatio: '1.85/1',
      },

      // Block 6: Two-C - Ingredients flatlay (imgi_11) + Paper bag (imgi_12)
      {
        id: 'block-two-c',
        type: 'two',
        ratio: 'portrait',
        left: {
          src: '/assets/projects/merci/two-c-left.webp',
          alt: 'Artistic ingredients flatlay composition with nuts, chocolate and typography',
          aspectRatio: '0.57/1',
        },
        right: {
          src: '/assets/projects/merci/two-c-right.webp',
          alt: 'White kraft retail take-away bag with twisted paper handles',
          aspectRatio: '0.57/1',
        },
      },

      // Block 7: Strip - Flavors icon strip (imgi_13)
      {
        id: 'block-icon-strip',
        type: 'strip',
        src: '/assets/projects/merci/icon-strip.webp',
        alt: 'Horizontal strip of circular illustrated flavor icons',
        aspectRatio: '4/1',
      },

      // Block 8: Two-D - Artisan packaging detail & Ribbon study
      {
        id: 'block-two-d',
        type: 'two',
        ratio: 'portrait',
        left: {
          src: '/assets/projects/merci/two-e-left.webp',
          alt: 'Craftsman hand-stamping brand stationery with custom wax stamp',
          aspectRatio: '0.57/1',
        },
        right: {
          src: '/assets/projects/merci/two-e-right.webp',
          alt: 'Diagonal silk ribbons printed with repeating brand typography',
          aspectRatio: '0.57/1',
        },
      },

      // Block 9: Wide-menus - Eclairs box and cards (imgi_16)
      {
        id: 'block-wide-menus',
        type: 'wide',
        src: '/assets/projects/merci/wide-menus.webp',
        alt: 'Display box of gourmet pastries alongside printed menu cards',
        aspectRatio: '1.85/1',
      },

      // Block 10: Wide-bench - Branded tote on park bench (imgi_17)
      {
        id: 'block-wide-bench',
        type: 'wide',
        src: '/assets/projects/merci/wide-bench.webp',
        alt: 'Branded tote bag resting on slatted wooden park bench in warm afternoon light',
        aspectRatio: '1.85/1',
      },
    ],
  },
};

// Convenient alias for URL routing and references
caseStudies['yum-yum'] = caseStudies['yumm-yum'];

