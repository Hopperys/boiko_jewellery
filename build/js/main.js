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

    if (document.contains(delivery) && document.contains(payment) && document.contains(refund)) {
      hideItems(delivery, payment, refund);
    }

    if (document.contains(materials)) {
      materials.addEventListener('click', function () {
        hideItems(payment, delivery, refund);
        toggleItems(materials);
      });
    }

    if (document.contains(delivery)) {
      delivery.addEventListener('click', function () {
        hideItems(materials, payment, refund);
        toggleItems(delivery);
      });
    }

    if (document.contains(payment)) {
      payment.addEventListener('click', function () {
        hideItems(materials, delivery, refund);
        toggleItems(payment);
      });
    }

    if (document.contains(refund)) {
      refund.addEventListener('click', function () {
        hideItems(materials, delivery, payment);
        toggleItems(refund);
      });
    }
  }
})();

(function () {
  var collection = document.querySelector('.filter__item--collection');
  var material = document.querySelector('.filter__item--material');
  var product = document.querySelector('.filter__item--product');
  var price = document.querySelector('.filter__item--price');

  var toggleClass = function (item) {
    item.classList.toggle('filter__item--opened');
    item.classList.toggle('filter__item--closed');
  };

  if (document.contains(collection)) {
    toggleClass(collection);

    collection.addEventListener('click', function () {
      toggleClass(collection);
    });
  }

  if (document.contains(material)) {
    toggleClass(material);

    material.addEventListener('click', function () {
      toggleClass(material);
    });
  }

  if (document.contains(product)) {
    product.addEventListener('click', function () {
      toggleClass(product);
    });
  }

  if (document.contains(price)) {
    price.addEventListener('click', function () {
      toggleClass(price);
    });
  }
})();


(function () {
  var pageHeader = document.querySelector('.page-header');
  var burger = document.querySelector('.page-header__burger');

  if (document.contains(pageHeader)) {
    var headerClassToggle = function () {
      pageHeader.classList.toggle('page-header--opened');
      pageHeader.classList.toggle('page-header--closed');
    };

    headerClassToggle();

    if (pageHeader.contains(burger)) {
      burger.addEventListener('click', function () {
        headerClassToggle();
      });
    }
  }
})();
