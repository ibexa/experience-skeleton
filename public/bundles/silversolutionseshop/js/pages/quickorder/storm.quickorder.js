/**
 * Main class for Storm Quickorder
 *
 * @requires jquery, underscorejs, storm.messages, storm.tooltip, storm.translations
 *
 * @author azh, mkr
 *
 * @class quickorder
 * @module Quickorder
 *
 */

var quickorder = {

  init: function () {

    var rowCount = 1;

    //creates an empty row
    function createEmptyRow() {
      // get the hidden empty row
      var row = $('.js-hidden-empty-row').clone();

      row.removeClass('js-hidden-empty-row hide');
      row.addClass('js-empty-row');

      //change the name attributes to make them unique
      //delete column
      var deleteName = 'ses_basket[' + rowCount + 'ec][item_delete]';
      row.find('.js-row-delete input')[0].setAttribute('name', deleteName);

      //amount column
      var amountName = 'ses_basket[' + rowCount + 'ec][quantity]';
      row.find('.js-row-amount input')[0].setAttribute('name', amountName);

      //sku column
      var skuName = 'ses_basket[' + rowCount + 'ec][sku]';
      var inBasketName = 'ses_basket[' + rowCount + 'ec][item_in_basket]';
      row.find('.js-row-sku input[type="text"]')[0].setAttribute('name', skuName);
      row.find('.js-row-sku input[type="hidden"]')[0].setAttribute('name', inBasketName);

      rowCount++;

      return row;
    }

    // add new empty line
    $('.js-add-row').on('click', function (e) {
      e.preventDefault();
      // get the hidden empty row
      var row = createEmptyRow();

      $('.js-quickorder-rows-wrapper').append(row);

      // re-init autocomplete
      autocompleteQuickorder();
    });

    // delete one empty line
    $('.js-del-row').on('click', function (e) {
      e.preventDefault();
      $('.js-quickorder-rows-wrapper').find('.js-empty-row:last').remove();
    });

    // add more empty lines
    $('.js-add-more-rows-button').on('click', function (e) {
      e.preventDefault();
      for (var i = 0; i < $('.js-add-more-rows option:selected').val(); i++) {
        // get the hidden empty row
        $('.js-quickorder-rows-wrapper').append(createEmptyRow());
      }

      // re-init autocomplete
      autocompleteQuickorder();
    });

    //functionality for file upload
    //see: https://github.com/blueimp/jQuery-File-Upload/wiki/Options
    $('#fileupload').fileupload({
      dropZone: $('#dropzone'),
      singleFileUploads: true,
      submit: function (e, data) {
        // show spinner
        storm.spinner.show();
      },
      success: function (data, status) {
        // hide spinner
        storm.spinner.hide();
        data = $.parseJSON(data);
        $('.js-quickorder-form-wrapper').html(data.content);
        // initialize quickorder class
        quickorder.init();

        // scroll to messages
        storm.scrollTo('.js-quickorder-messages');

        // re-init autocomplete
        autocompleteQuickorder();
      }
    });
  }
};

// initialize quickorder class
quickorder.init();

//see: https://github.com/blueimp/jQuery-File-Upload/wiki/Options
$(document).bind('dragover', function (e) {
  var dropZone = $('#dropzone'),
    timeout = window.dropZoneTimeout;
  if (!timeout) {
    dropZone.addClass('in');
  } else {
    clearTimeout(timeout);
  }
  var found = false,
    node = e.target;
  do {
    if (node === dropZone[0]) {
      found = true;
      break;
    }
    node = node.parentNode;
  } while (node != null);
  if (found) {
    dropZone.addClass('hover');
  } else {
    dropZone.removeClass('hover');
  }
  window.dropZoneTimeout = setTimeout(function () {
    window.dropZoneTimeout = null;
    dropZone.removeClass('in hover');
  }, 100);
});

// If you want to allow specific drop zones but disable the default browser action for
// file drops on the document, add the following JavaScript code:
$(document).bind('drop dragover', function (e) {
  e.preventDefault();
});
