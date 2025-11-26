# Santosha Yoga Home Website
**संतोष · Contentment**

## Project Overview

This is a website for Santosha Yoga Home in Dalat, Vietnam - a sacred space for yoga, meditation, sound healing, and contemplative workshops. The site is being created as a gift of reciprocity for Uyen and Nhan, the teachers who host this beautiful space.

## Design Philosophy

### Sacred Text Aesthetic
The entire design follows the metaphor of **opening a handmade book slowly, with presence**:
- Like pages of an artisan book with watercolor paper texture
- Table of contents opening into chapters that unfold below
- Ornamental dividers (❋ ❋ ❋) between sections like traditional chapter breaks
- Spacious padding creating room to breathe between thoughts
- Not rushed or crowded - each section has space to be received

### Core Values in Design
- **Spaciousness**: Generous padding, line-height 1.8, room to breathe
- **Warmth**: Earth tones, natural colors, organic feeling
- **Groundedness**: Reflecting yoga's rooted, stable qualities
- **Openness**: Letter-spacing creating ease, not cramped
- **Reverence**: Treating content with care, like sacred teachings

## Color Palette

```css
--cream: #FAF7F0        /* Handmade paper warmth, natural foundation */
--warm-white: #FFFFFF   /* Pure moments, clarity */
--sage: #8B9A7E         /* Peace, grounding, nature connection */
--terracotta: #C4826B   /* Earth warmth, human touch */
--gold: #D4A574         /* Sacred light, gentle illumination */
--earth-brown: #5C4E47  /* Readable text, rooted presence */
--soft-gray: #E8E4DC    /* Subtle boundaries, gentle structure */
```

### Color Usage Guidelines
- **Sage**: Main headings, peaceful anchors
- **Terracotta**: Subheadings, warm accents
- **Gold**: Ornamental elements, gentle highlights
- **Earth Brown**: Body text (highly readable, natural)

## Typography

### Fonts
- **Body text**: Georgia / Times New Roman (serif)
  - Why: Literary warmth, readable, contemplative feeling
  - Size: 18px base
  - Line height: 1.8 (breathing room between lines)
  
- **Headings**: System sans-serif (-apple-system, BlinkMacSystemFont, 'Segoe UI')
  - Why: Clean spaciousness, modern clarity
  - Weight: 300 (light) - not demanding attention, gentle guidance
  - Letter-spacing: 0.05em to 0.1em (openness)

### Typography Principles
- Light font weights (200-300) = ease, not heavy
- Generous letter-spacing = not rushed
- Never all-caps except for section labels (Contents)
- Italic for subtle emphasis, not bold (gentler)

## Paper Texture Background

### Implementation
```css
background-image: url('paper.png');
background-repeat: repeat;
background-color: var(--cream); /* Fallback while loading */
```

### The Paper Effect
The watercolor paper texture (paper.png) tiles seamlessly across the entire page, creating the feeling of a handmade book. Different sections have varying transparency levels so the paper shows through with different intensities, creating depth and rhythm.

### Transparency Layers
- **Header**: 50% opacity (rgba(255, 255, 255, 0.5))
- **TOC**: 60% opacity (rgba(255, 255, 255, 0.6))
- **Alternating sections**: 40% opacity (rgba(255, 255, 255, 0.4))
- **Footer**: 95% opacity (nearly solid for grounding closure)

**Important**: These are just white overlays with varying opacity. No backdrop-filter blur - that was causing pure white issues. The simple rgba() approach lets the paper texture breathe through naturally.

## Structure & Navigation

### Book-Like Flow
1. **Header** - Cover page (title and subtitle)
2. **Table of Contents** - Classical book structure with Roman numerals
3. **Chapters** (Sections) - Each major topic is a chapter
4. **Ornamental Dividers** - ❋ ❋ ❋ between chapters
5. **Footer** - Back cover (simple closing)

### Section Organization
```
I.   Yoga & Meditation
II.  Singing Bowl
III. Room
IV.  Retreat
V.   Workshop
     - Cooking
     - Painting
     - Photography
     - Handwriting
VI.  Reference
```

### Navigation Behavior
- Clicking TOC links smoothly scrolls to sections (scroll-behavior: smooth)
- No jarring jumps - gentle transitions like turning pages
- Arrows (→) in TOC guide eye to action without demanding

## Content Guidelines

### What Each Section Will Contain

**I. Yoga & Meditation**
- Daily class schedule
- Teaching philosophy (Sivananda tradition)
- What students can expect
- Teachers' backgrounds (Uyen and Nhan)
- Types of practice offered

**II. Singing Bowl**
- Tibetan singing bowl sessions
- Sound healing benefits
- Session structure and duration
- Booking information

**III. Room**
- Accommodation descriptions
- Room amenities
- Peaceful environment qualities
- Rates and booking process
- Photos of the space

**IV. Retreat**
- Extended program offerings
- Retreat durations and schedules
- Daily structure
- Included meals (organic vegetarian)
- Retreat philosophy and intentions

**V. Workshop**
Each subsection describes different contemplative practices:
- **Cooking**: Vietnamese vegetarian cuisine, mindful preparation
- **Painting**: Uyen's watercolor artistry, contemplative creation
- **Photography**: Mindful seeing, capturing beauty with awareness
- **Handwriting**: Calligraphy, meditation through pen and paper

**VI. Reference**
- Contact information (phone, email, social media)
- Physical address and location in Dalat
- Directions to Santosha
- Booking procedures
- Any practical visitor information

## Technical Implementation Notes

### Responsive Design
- Mobile breakpoint: 768px
- On smaller screens: reduce font sizes, maintain spacious feeling
- Padding adjusts but proportions remain harmonious

### Content Placeholders
Currently using `.content-placeholder` divs with:
- Semi-transparent gray background
- Gold left border accent
- Italic text explaining what will go there
- These will be replaced with actual content and removed

### Smooth Scrolling
JavaScript enables smooth scroll behavior for anchor links:
```javascript
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
```

## Future Enhancements

### Phase 1: Content (Current)
- [ ] Replace all placeholder content with actual descriptions
- [ ] Add photos of space, teachers, workshops
- [ ] Include contact information and booking details
- [ ] Add links to social media or booking platforms

### Phase 2: Visual Enhancement
- [ ] Add gallery section for photos
- [ ] Include Uyen's watercolor artwork
- [ ] Possibly add gentle animations (very subtle, not distracting)
- [ ] Consider adding a simple contact form

### Phase 3: Functionality
- [ ] Booking calendar integration (if needed)
- [ ] Multi-language support (Vietnamese + English?)
- [ ] Newsletter signup (if desired)
- [ ] Blog or updates section (optional)

## Development Principles

### What to Preserve
- **Spaciousness** - never crowd content
- **Warmth** - natural colors, organic feeling
- **Simplicity** - don't over-complicate
- **Paper texture visibility** - always showing through
- **Light touch** - gentle, not demanding

### What to Avoid
- Heavy fonts or all-caps everywhere
- Aggressive colors or high contrast
- Cluttered layouts or too much happening at once
- Pure white backgrounds that hide the paper
- Jarring transitions or animations
- Corporate/commercial feeling

### When Adding New Content
1. Check if transparency needs adjustment for readability
2. Maintain generous padding (6rem vertical typical)
3. Keep line-height at 1.8 for body text
4. Use earth-tone color palette
5. Test on mobile to ensure it remains spacious

## The Spirit We're Creating

This isn't just a website - it's a **digital threshold** to a sacred space. Someone visiting this page should feel:
- Welcomed, not sold to
- Peaceful, not overstimulated  
- Curious, not overwhelmed
- Grounded, not floating
- Invited, not pressured

The design should feel like **receiving a beautiful handmade letter** from friends inviting you to visit their yoga home in the mountains. Warm, authentic, spacious, human.

## Files Structure

```
/santosha/
├── index.html          # Main page (single-page design)
├── paper.png          # Watercolor paper texture (tileable)
└── claude.md          # This file - project documentation
```

## For Future Claude Code Sessions

When working on this project:
1. Read this file first to understand intentions
2. Preserve the aesthetic principles above
3. Check changes on both desktop and mobile
4. Ensure paper texture remains visible
5. Maintain spacious, warm, contemplative feeling
6. Ask Naso if unsure about design direction

## Gratitude Note

This website is being created as a gift for Uyen and Nhan, who have provided beautiful space, teaching, and nourishment at Santosha Yoga Home during a significant healing journey. The care put into this design reflects the care they've shown. 

**संतोष (Santosha)**: Contentment - the feeling we hope to evoke through this design.

---

*"When you slow down enough to truly taste each moment, everything becomes ceremony."*

🙏 💛
