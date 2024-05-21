/**
 * Header class
 */
/* eslint-disable */
export default class Header {
  constructor(el) {
    this.el = el;
  }

  static init(el) {
    Header.initializeDropdown();
    Header.initializeMobileDropdown();
    Header.mobileMenu();
    return new Header(el);
  }

  static initializeDropdown() {
    const dropdownItems = document.querySelectorAll('.dropdown');
    dropdownItems.forEach((item) => {
      const dropdownContent = item.querySelector('.dropdown-content');
      const dropdownIcon = item.querySelector('.dropdown-icon');
      const dropdownTriangle = item.querySelector('.dropdown__triangle-up');
      item.addEventListener('mouseenter', () => {
        if (window.screen.width >= 1024) {
          dropdownContent.classList.remove('active-item');
          dropdownTriangle.style.opacity = 1;
        }
      });
      item.addEventListener('mouseleave', () => {
        if (window.screen.width >= 1024) {
          dropdownContent.classList.add('active-item');
          dropdownTriangle.style.opacity = 0;
        }
      });
        item.addEventListener('keydown', (event) => {
          if (event.keyCode === 13) {
            const focusedElement = document.activeElement;

            // Check if the focused element is a link inside the dropdown content
            if (focusedElement.classList.contains('dropdown-toggle') || !focusedElement.closest('.dropdown-content')) {
              event.preventDefault();

              const dropdownContent = event.currentTarget.querySelector('.dropdown-content');
              const dropdownIcon = event.currentTarget.querySelector('.dropdown-icon');
              const dropdownTriangle = event.currentTarget.querySelector('.dropdown__triangle-up');

              dropdownContent.classList.toggle('active-item');
              const isActive = !dropdownContent.classList.contains('active-item');
              dropdownIcon.style.transform = !isActive ? 'none' : 'rotate(180deg)';
              dropdownTriangle.style.opacity = isActive ? '1' : '0';
            }
          }
        });

        item.addEventListener('focusout', (event) => {
          if (!item.contains(event.relatedTarget)) {
            dropdownContent.classList.add('active-item');
            dropdownIcon.style.transform = 'none';
            dropdownTriangle.style.opacity = '0';
          }
        });

        const megaMenuItems = document.querySelectorAll('.mega-menu__item');
        megaMenuItems.forEach(item => {
          item.addEventListener('keydown', event => {
            if (event.keyCode === 13) {
              const link = item.querySelector('.cmp-link a');
              if (link) {
                link.click();
              }
            }
          });
        });

      var hasTextComponent = dropdownContent.querySelector('.text') !== null;

      if (hasTextComponent) {
          var cmpList = dropdownContent.querySelector('.cmp-list');
          var firstListItem = cmpList.querySelector('li');

          cmpList.style.paddingTop = '0';
          cmpList.style.marginTop = '0';

          firstListItem.style.paddingTop = '0';
          firstListItem.style.marginTop = '0';
      }
    });
  }

  static initializeMobileDropdown() {
    const mobileDropdown = document.querySelector('.cmp-list__mega');
    const dropdownItems = mobileDropdown.querySelectorAll('.dropdown');
    dropdownItems.forEach((item) => {
      const dropdownContent = item.querySelector('.dropdown-content');
      const dropdownIcon = item.querySelector('.dropdown-icon');
      const dropdownHeading = item.querySelector('.dropdown-toggle');
      dropdownHeading.addEventListener('click', () => {
        dropdownContent.classList.toggle('active-item');
        dropdownIcon.style.transform = dropdownContent.classList.contains('active-item') ? 'none' : 'rotate(180deg)';
      });
    });
  }

  static mobileMenu() {
    const menuIcon = document.getElementById('header__menu-icon');
    const mobileMenu = document.getElementById('cmp-mob-menu');
    const closeIcon = document.getElementById('close-icon');
    const backdrop = document.getElementById('backdrop-active');

    function toggleMobileMenu() {
      mobileMenu.classList.toggle('menu-open');
      backdrop?.classList.toggle('backdrop-bg');

      if (backdrop?.classList.contains('backdrop-bg')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }

    menuIcon.addEventListener('click', (event) => {
      event.preventDefault();
      toggleMobileMenu();
    });

    closeIcon.addEventListener('click', (event) => {
      event.preventDefault();
      toggleMobileMenu();
    });

    document.addEventListener('click', (event) => {
      if(event.target.id === 'backdrop-active') {
        toggleMobileMenu();
      }
    });

    window.addEventListener('resize', () => {
      mobileMenu.classList.add('menu-open');
      backdrop?.classList.remove('backdrop-bg');
    });
  }
}
