/**
 Document        : configuration.js
 Author          : tja
 Dependencies    : jQuery library
 Description:
 We are using this JS to handle all functionalites for eZ configuration
 */

$(document).ready(function () {

  $(document).on('click', '.js-field-add', function (e) {
    e.preventDefault();

    var arrayItems = $(this).parents('div.js-configuration-array').find('.js-configuration-array-item');
    var addItem = arrayItems.first().clone();

    var htmlRemoveBtn = [
      '<a href="#" class="label alert radius field-remove js-field-remove">',
        '<i class="fa fa-minus-circle fa-fw"></i>' + storm_translations.get('MESSAGES', 'REMOVE') + '',
      '</a>'
    ].join('');

    $(addItem).find('.js-append-remove').append(htmlRemoveBtn);

    // clear out default values
    addItem.find('input').attr('value', '');
    addItem.find('option').attr('selected', false);
    $(arrayItems.last()).after(addItem);
  });

  $(document).on('click', '.js-field-remove', function (e) {
    e.preventDefault();
    $(this).parents('div.js-configuration-array-item').remove();
  });
});
