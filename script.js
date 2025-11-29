/*
═══════════════════════════════════════════════════════════
SMOOTH SCROLL NAVIGATION
═══════════════════════════════════════════════════════════
When clicking TOC links, smoothly scroll to sections
rather than jumping abruptly. Creates gentle transition
like turning pages rather than teleporting.
*/
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

// Expandable Heart of Santosha - Vietnamese
const expandHeartBtn = document.getElementById('expandHeartBtn');
const expandedHeart = document.getElementById('expandedHeart');
let isExpandedVi = false;

expandHeartBtn.addEventListener('click', function() {
    if (!isExpandedVi) {
        expandedHeart.style.maxHeight = expandedHeart.scrollHeight + 'px';
        expandedHeart.style.marginTop = '2rem';
        expandedHeart.style.paddingTop = '2rem';
        expandedHeart.style.opacity = '1';
        expandHeartBtn.textContent = 'Thu gọn';
        isExpandedVi = true;
    } else {
        expandedHeart.style.maxHeight = '0';
        expandedHeart.style.marginTop = '0';
        expandedHeart.style.paddingTop = '0';
        expandedHeart.style.opacity = '0';
        expandHeartBtn.textContent = 'Đọc thêm';
        isExpandedVi = false;
    }
});

// Expandable Heart of Santosha - English
const expandHeartEnBtn = document.getElementById('expandHeartEnBtn');
const expandedHeartEn = document.getElementById('expandedHeartEn');
let isExpandedEn = false;

expandHeartEnBtn.addEventListener('click', function() {
    if (!isExpandedEn) {
        expandedHeartEn.style.maxHeight = expandedHeartEn.scrollHeight + 'px';
        expandedHeartEn.style.marginTop = '2rem';
        expandedHeartEn.style.paddingTop = '2rem';
        expandedHeartEn.style.opacity = '1';
        expandHeartEnBtn.textContent = 'Show less';
        isExpandedEn = true;
    } else {
        expandedHeartEn.style.maxHeight = '0';
        expandedHeartEn.style.marginTop = '0';
        expandedHeartEn.style.paddingTop = '0';
        expandedHeartEn.style.opacity = '0';
        expandHeartEnBtn.textContent = 'Read more';
        isExpandedEn = false;
    }
});

// Button hover effects
expandHeartBtn.addEventListener('mouseenter', function() {
    this.style.backgroundColor = '#7A8970';
});
expandHeartBtn.addEventListener('mouseleave', function() {
    this.style.backgroundColor = 'var(--sage)';
});

expandHeartEnBtn.addEventListener('mouseenter', function() {
    this.style.backgroundColor = '#7A8970';
});
expandHeartEnBtn.addEventListener('mouseleave', function() {
    this.style.backgroundColor = 'var(--sage)';
});

// Table of contents contact link hover effects
document.querySelectorAll('.table-of-contents a[href^="mailto"], .table-of-contents a[href^="tel"]').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.color = 'var(--sage)';
    });
    link.addEventListener('mouseleave', function() {
        this.style.color = 'var(--terracotta)';
    });
});
