/**
    Document        : storm.phalanx.actions
    Author          : mkr, dho
    Dependencies    : storm.phalanx.controller
    Requirements    : storm.phalanx.parser
    Description:
        Actions for the Phalanx system

    This file is like a bridge between hoplites and whole system. Hoplites
    communicates with the system to achieve goals together.
*/

// create an instance of phalanxParser
var phalanxInit = new phalanxParser;

/**
 * Object with types and hoplite name (which hoplite use for which TYPE).
 * As you can each hoplite can have more than one TYPE (action) for example
 * basket hoplite has: add_basket and get_basket.
 *
 * To make your hoplite work, please put it on this list.
 */
var phalanxSettings = {
    'get_price'                                     : 'price',
    'add_basket'                                    : 'basket',
    'get_basket'                                    : 'basket',
    'sort_basket'                                   : 'basket',
    'all_to_basket'                                 : 'basket',
    'add_stored_basket'                             : 'basket',
    'get_stored_baskets_list'                       : 'basket',
    'remove_stored_basket'                          : 'basket',
    'remove_basket_line_from_stored_basket'         : 'basket',
    'get_basket_variant'                            : 'basket',
    'load_list'                                     : 'list',
    'get_sidebox'                                   : 'sidebox',
    'validate_step'                                 : 'checkout',
    'get_delivery_from_invoice'                     : 'checkout',
    'get_existing_delivery'                         : 'checkout',
    'get_empty_delivery'                            : 'checkout',
    'get_chart_data'                                : 'dashboard',
    'get_overview_data'                             : 'dashboard',
    'get_tab_data'                                  : 'dashboard',
    'get_panel_data'                                : 'dashboard',
    'get_variants'                                  : 'variant',
    'get_line'                                      : 'quickorder',
    'get_search_result'                             : 'search'
};

/**
 * You have to create an instance of your hoplite before you initialize
 * phalanxParser to be sure everything is working fine.
 */

// create an instance of price hoplite
phalanxInit.objHoplite['price'] = new hoplitePrice;

// create an instance of basket hoplite
phalanxInit.objHoplite['basket'] = new hopliteBasket;

// create an instance of list hoplite
phalanxInit.objHoplite['list'] = new hopliteList;

// create an instance of sidebox hoplite
phalanxInit.objHoplite['sidebox'] = new hopliteSidebox;

// create an instance of checkout hoplite
phalanxInit.objHoplite['checkout'] = new hopliteCheckout;

// create an instance of dashboard hoplite
phalanxInit.objHoplite['dashboard'] = new hopliteDashboard;

// create an instance of variants hoplite
phalanxInit.objHoplite['variants'] = new hopliteVariants;

// create an instance of quickorder hoplite
phalanxInit.objHoplite['quickorder'] = new hopliteQuickorder;

// create an instance of quickorder hoplite
phalanxInit.objHoplite['search'] = new hopliteSearch;

// initialize the phalanxParser (start the parser)
phalanxInit.init();
