'use strict';

(function () {
  var materials = document.querySelector('.faq__item--materials');
  var delivery = document.querySelector('.faq__item--delivery');
  var payment = document.querySelector('.faq__item--payment');
  var refund = document.querySelector('.faq__item--return');
  var faq = document.querySelector('.faq');


  if (document.contains(faq)) {

    var hideItems = function (first, second, third) {
      first.classList.remove('faq__item--opened');
      second.classList.remove('faq__item--opened');
      third.classList.remove('faq__item--opened');
      first.classList.add('faq__item--closed');
      second.classList.add('faq__item--closed');
      third.classList.add('faq__item--closed');
    };

    var toggleItems = function (item) {
      item.classList.toggle('faq__item--opened');
      item.classList.toggle('faq__item--closed');
    };

    var item;
    var item1;
    var item2;
    var item3;

    var spaceKeydownHandler = function (evt) {
      if (evt.code === 'Space') {
        evt.preventDefault();
        toggleItems(item);

        if (item1.classList.contains('faq__item--opened')) {
          toggleItems(item1);
        }

        if (item3.classList.contains('faq__item--opened')) {
          toggleItems(item3);
        }

        if (item2.classList.contains('faq__item--opened')) {
          toggleItems(item2);
        }
      }
    };

    if (document.contains(delivery) && document.contains(payment) && document.contains(refund)) {
      hideItems(delivery, payment, refund);
    }

    if (document.contains(materials)) {
      materials.addEventListener('click', function () {
        hideItems(payment, delivery, refund);
        toggleItems(materials);
      });

      materials.addEventListener('focus', function () {
        item = materials;
        item1 = delivery;
        item2 = payment;
        item3 = refund;
        document.addEventListener('keydown', spaceKeydownHandler);
      });

      materials.addEventListener('focusout', function () {
        document.removeEventListener('keydown', spaceKeydownHandler);
      });
    }

    if (document.contains(delivery)) {
      delivery.addEventListener('click', function () {
        hideItems(materials, payment, refund);
        toggleItems(delivery);
      });

      delivery.addEventListener('focus', function () {
        item = delivery;
        item1 = materials;
        item2 = payment;
        item3 = refund;
        document.addEventListener('keydown', spaceKeydownHandler);
      });

      delivery.addEventListener('focusout', function () {
        document.removeEventListener('keydown', spaceKeydownHandler);
      });
    }

    if (document.contains(payment)) {
      payment.addEventListener('click', function () {
        hideItems(materials, delivery, refund);
        toggleItems(payment);
      });

      payment.addEventListener('focus', function () {
        item = payment;
        item1 = materials;
        item2 = delivery;
        item3 = refund;
        document.addEventListener('keydown', spaceKeydownHandler);
      });

      payment.addEventListener('focusout', function () {
        document.removeEventListener('keydown', spaceKeydownHandler);
      });
    }

    if (document.contains(refund)) {
      refund.addEventListener('click', function () {
        hideItems(materials, delivery, payment);
        toggleItems(refund);
      });

      refund.addEventListener('focus', function () {
        item = refund;
        item1 = materials;
        item2 = delivery;
        item3 = payment;
        document.addEventListener('keydown', spaceKeydownHandler);
      });

      refund.addEventListener('focusout', function () {
        document.removeEventListener('keydown', spaceKeydownHandler);
      });
    }
  }
})();

(function () {
  var collection = document.querySelector('.filter__item--collection');
  var material = document.querySelector('.filter__item--material');
  var product = document.querySelector('.filter__item--product');
  var price = document.querySelector('.filter__item--price');
  var pinkFlamingo = document.querySelector('#pinkFlamingo');
  var dreams = document.querySelector('#dreams');
  var gold = document.querySelector('#gold');
  var silver = document.querySelector('#silver');
  var earring = document.querySelector('#earring');
  var rings = document.querySelector('#rings');
  var chocker = document.querySelector('#chocker');
  var neckless = document.querySelector('#neckless');

  var toggleClass = function (item) {
    item.classList.toggle('filter__item--opened');
    item.classList.toggle('filter__item--closed');
  };

  var item;
  var $seconditem;

  var keydownHandler = function (evt) {
    if (evt.code === 'Space') {
      evt.preventDefault();
      toggleClass(item);
    }
  };

  var checkboxSwitcher = function (evt) {
    if (evt.code === 'Space') {
      evt.preventDefault();

      if ($seconditem.prop('checked') === false) {
        $seconditem.prop('checked', true);
      } else {
        $seconditem.prop('checked', false);
      }
    }
  };

  if (document.contains(collection)) {
    var collectionHeader = collection.querySelector('h3');
    toggleClass(collection);

    collection.addEventListener('click', function () {
      toggleClass(collection);
    });

    collectionHeader.addEventListener('focus', function () {
      item = collection;
      document.addEventListener('keydown', keydownHandler);
      collection.classList.add('filter__item--focus');
    });

    pinkFlamingo.addEventListener('focus', function () {
      document.removeEventListener('keydown', keydownHandler);
      $seconditem = $('#pinkFlamingo');
      document.addEventListener('keydown', checkboxSwitcher);
    });

    pinkFlamingo.addEventListener('focusout', function () {
      document.removeEventListener('keydown', checkboxSwitcher);
    });

    dreams.addEventListener('focus', function () {
      document.removeEventListener('keydown', keydownHandler);
      $seconditem = $('#dreams');
      document.addEventListener('keydown', checkboxSwitcher);
    });

    dreams.addEventListener('focusout', function () {
      document.removeEventListener('keydown', checkboxSwitcher);
    });

    collectionHeader.addEventListener('focusout', function () {
      document.removeEventListener('keydown', keydownHandler);
      collection.classList.remove('filter__item--focus');
    });
  }

  if (document.contains(material)) {
    var materialHeader = material.querySelector('h3');
    toggleClass(material);

    material.addEventListener('click', function () {
      toggleClass(material);
    });

    materialHeader.addEventListener('focus', function () {
      item = material;
      material.classList.add('filter__item--focus');
      document.addEventListener('keydown', keydownHandler);
    });

    gold.addEventListener('focus', function () {
      document.removeEventListener('keydown', keydownHandler);
      $seconditem = $('#gold');
      document.addEventListener('keydown', checkboxSwitcher);
    });

    gold.addEventListener('focusout', function () {
      document.removeEventListener('keydown', checkboxSwitcher);
    });

    silver.addEventListener('focus', function () {
      document.removeEventListener('keydown', keydownHandler);
      $seconditem = $('#silver');
      document.addEventListener('keydown', checkboxSwitcher);
    });

    silver.addEventListener('focusout', function () {
      document.removeEventListener('keydown', checkboxSwitcher);
    });

    material.addEventListener('focusout', function () {
      document.removeEventListener('keydown', keydownHandler);
      material.classList.remove('filter__item--focus');
    });
  }

  if (document.contains(product)) {
    var productHeader = product.querySelector('h3');
    product.addEventListener('click', function () {
      toggleClass(product);
    });

    productHeader.addEventListener('focus', function () {
      item = product;
      product.classList.add('filter__item--focus');
      document.addEventListener('keydown', keydownHandler);
    });

    earring.addEventListener('focus', function () {
      document.removeEventListener('keydown', keydownHandler);
      $seconditem = $('#earring');
      document.addEventListener('keydown', checkboxSwitcher);
    });

    earring.addEventListener('focusout', function () {
      document.removeEventListener('keydown', checkboxSwitcher);
    });

    rings.addEventListener('focus', function () {
      document.removeEventListener('keydown', keydownHandler);
      $seconditem = $('#rings');
      document.addEventListener('keydown', checkboxSwitcher);
    });

    rings.addEventListener('focusout', function () {
      document.removeEventListener('keydown', checkboxSwitcher);
    });

    chocker.addEventListener('focus', function () {
      document.removeEventListener('keydown', keydownHandler);
      $seconditem = $('#chocker');
      document.addEventListener('keydown', checkboxSwitcher);
    });

    chocker.addEventListener('focusout', function () {
      document.removeEventListener('keydown', checkboxSwitcher);
    });

    neckless.addEventListener('focus', function () {
      document.removeEventListener('keydown', keydownHandler);
      $seconditem = $('#neckless');
      document.addEventListener('keydown', checkboxSwitcher);
    });

    neckless.addEventListener('focusout', function () {
      document.removeEventListener('keydown', checkboxSwitcher);
    });

    product.addEventListener('focusout', function () {
      document.removeEventListener('keydown', keydownHandler);
      product.classList.remove('filter__item--focus');
    });
  }

  if (document.contains(price)) {
    var priceHeader = price.querySelector('h3');
    price.addEventListener('click', function () {
      toggleClass(price);
    });

    priceHeader.addEventListener('focus', function () {
      item = price;
      price.classList.add('filter__item--focus');
      document.addEventListener('keydown', keydownHandler);
    });

    price.addEventListener('focusout', function () {
      price.classList.remove('filter__item--focus');
      document.removeEventListener('keydown', keydownHandler);
    });
  }
})();


(function () {
  var pageHeader = document.querySelector('.page-header');
  var burger = document.querySelector('.page-header__burger');

  if (document.contains(pageHeader)) {
    pageHeader.classList.remove('page-header--nojs');
    pageHeader.classList.add('page-header--closed');

    if (pageHeader.contains(burger)) {
      burger.addEventListener('click', function () {
        pageHeader.classList.toggle('page-header--opened');
        pageHeader.classList.toggle('page-header--closed');
        document.body.classList.toggle('page-body--menu');
      });
    }
  }
})();

(function () {
  var loginButton = document.querySelector('.page-header__login');
  var popup = document.querySelector('.popup');
  var popupForm = document.querySelector('.popup form');
  var closeButton = popup.querySelector('.popup__close');
  var passwordInput = popup.querySelector('#password');
  var emailInput = popup.querySelector('#popupEmail');
  var pageBody = document.querySelector('.page-body');
  var pageHeader = document.querySelector('.page-header');

  if (document.contains(popup) && document.contains(loginButton)) {
    var popupClassToggle = function () {
      popup.classList.toggle('popup--opened');
      popup.classList.toggle('popup--closed');
    };

    var popupKeydownHandler = function (evt) {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        popupClassToggle();
        pageBody.classList.remove('page-body--popup');
        pageHeader.classList.remove('page-header--popup');
        document.removeEventListener('keydown', popupKeydownHandler);
      }
    };

    var closeClickHandler = function (evt) {
      if (!popup.contains(evt.target) && evt.target !== loginButton && popup.classList.contains('popup--opened')) {
        popupClassToggle();
        pageBody.classList.remove('page-body--popup');
        pageHeader.classList.remove('page-header--popup');
        document.removeEventListener('click', closeClickHandler);
      }
    };

    var isStorageSupport = true;
    var storage = {};

    try {
      storage.mail = localStorage.getItem('mail');
    } catch (err) {
      isStorageSupport = false;
    }

    loginButton.addEventListener('click', function (event) {
      event.preventDefault();
      popupClassToggle();
      pageBody.classList.add('page-body--popup');
      pageHeader.classList.add('page-header--popup');

      var focusHolder = function (evt) {
        if (evt.shiftKey && evt.key === 'Tab') {
          evt.preventDefault();
        }
      };

      emailInput.addEventListener('focus', function () {
        document.addEventListener('keydown', focusHolder);
      });

      emailInput.addEventListener('focusout', function () {
        document.removeEventListener('keydown', focusHolder);
      });

      emailInput.focus();

      if (storage) {
        emailInput.value = storage.mail;
      }

      if (emailInput.value !== '') {
        passwordInput.focus();
      }

      document.addEventListener('keydown', popupKeydownHandler);
      document.addEventListener('click', closeClickHandler);
    });

    popupForm.addEventListener('submit', function (evt) {
      evt.preventDefault();

      if (isStorageSupport) {
        localStorage.setItem('mail', emailInput.value);
      }

      popupClassToggle();
      pageBody.classList.remove('page-body--popup');
      pageHeader.classList.remove('page-header--popup');
      popupForm.submit();
    });

    if (popup.contains(closeButton)) {
      closeButton.addEventListener('click', function () {
        popupClassToggle();
        pageBody.classList.remove('page-body--popup');
        pageHeader.classList.remove('page-header--popup');
      });
    }
  }
})();

(function () {
  var filter = document.querySelector('.filter');

  if (document.contains(filter)) {
    var body = document.body;
    var filterButton = filter.querySelector('.filter__show');
    var filterClose = filter.querySelector('.filter__close');
    var submitButton = filter.querySelector('.filter__submit');
    var filterForm = filter.querySelector('.filter form');

    var popupKeydownHandler = function (evt) {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        filter.classList.remove('filter--opened');
        filterClose.classList.remove('filter__close--opened');
        body.classList.remove('page-body--popup');
        document.removeEventListener('keydown', popupKeydownHandler);
      }
    };

    var closeClickHandler = function (evt) {
      if (!filter.contains(evt.target) && evt.target !== filterButton && filter.classList.contains('filter--opened')) {
        filter.classList.remove('filter--opened');
        body.classList.remove('page-body--popup');
        filterClose.classList.remove('filter__close--opened');
        document.removeEventListener('click', closeClickHandler);
      }
    };

    filterButton.addEventListener('click', function () {
      filter.classList.add('filter--opened');
      body.classList.add('page-body--popup');
      filterClose.classList.add('filter__close--opened');

      document.addEventListener('keydown', popupKeydownHandler);
      document.addEventListener('click', closeClickHandler);
    });

    filterClose.addEventListener('click', function () {
      filter.classList.remove('filter--opened');
      filterClose.classList.remove('filter__close--opened');
      body.classList.remove('page-body--popup');
    });

    submitButton.addEventListener('click', function (evt) {
      evt.preventDefault();
      filterClose.classList.remove('filter__close--opened');
      body.classList.remove('page-body--popup');
      filter.classList.remove('filter--opened');
      filterForm.submit();
    });
  }
})();

(function () {
  $(function () {
    var SLIDES_TO_SHOW = 6;
    var $slickElement = $('.slider__boxes');
    $slickElement.on('afterChange', function (event, slick, currentSlide) {
      var currentPage = Math.round((currentSlide + 1) / 2);
      $('.slider__pages').text(currentPage + ' of ' + SLIDES_TO_SHOW);
    });

    $('.slider__boxes').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      prevArrow: $('.slider__left'),
      nextArrow: $('.slider__right'),
      dots: true,
      dotsClass: 'said-dots',
      swipe: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
            swipe: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false,
            swipe: true,
          }
        },
      ]
    });
  });
})();
