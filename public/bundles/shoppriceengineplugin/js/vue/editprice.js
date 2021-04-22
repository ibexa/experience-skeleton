Vue.component("editprice", {
    template: `
     <div class="editprice">
        <div>
        Please select the currency:
        <h2>
            <span v-for="(factor,currencyItem) in priceSearch.currencyList">
                <span v-if="currencyItem == currency" class="badge badge-success" @click="setCurrency(currencyItem)">{{ currencyItem }}</span>
                <span v-if="currencyItem != currency" class="badge badge-default" @click="setCurrency(currencyItem)">{{ currencyItem }}</span>
            </span>
            </h2>
        </div>
        <div class="form-group mt-4 mb-4 row" v-if="allowsearch == 'true'">
          <div class="col-sm-3">
            <label class="ez-filters__item-label">{{ translate('label.sku') }} *</label>
              <input type="text" name="sku.query" v-model="priceSearch.sku" id="" placeholder="type sku" v-on:keyup.enter="searchSku(priceSearch.sku)" class="ez-filters__input form-control">
          </div>
          <div class="col-sm-3">
            <button class="btn btn-primary mt-4"   @click="searchSku(priceSearch.sku)">
              <i  aria-hidden="true">Search</i>
            </button>
          </div>
        </div>



        <p v-if="allowsearch == 'true'">
            The pricemanagement allows to setup prices manually. Search for a sku and define the prices.
        </p>
         <div v-if="message.type != ''">
               <div class="alert-box alert" v-if="message.type == 'alert'">
                    {{ message.text }}
               </div>
               <div class="alert-box info" v-if="message.type == 'success'">
                    {{ message.text }}
               </div>
          </div>


          <div class="ez-table ez-table-subitems" v-if="priceSearch.status == 1 && priceSearch.variants.length == 0" >

          <div class="ez-table-header" v-if="priceSearch.status == 1">
            <div class="ez-table-header__headline">
                <strong>Prices for {{ priceSearch.name }}, {{ translate('label.list_price') }}  {{ (priceSearch.baseprice * currencyFactor).toFixed(2)}} {{ currency}}</strong>
            </div>
            <div>
                <button type="submit" href="#" @click="addPriceLine(emptyLine,'-')" class="btn btn-primary">
                    <svg class="ez-icon ez-icon-create">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/bundles/ezplatformadminui/img/ez-icons.svg#create"></use>
                    </svg>
                </button>
            </div>

            </div>
              <div class="table-container">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>{{ translate('label.sku') }}</th>
                            <th>{{ translate('label.customer_group') }}</th>
                            <th>{{ translate('label.base_price') }}</th>
                            <th>{{ translate('label.offer_price') }}</th>
                            <th>{{ translate('label.currency') }}</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>

                    <tr v-for="(priceRow, index) in priceSearch.prices['-']" >
                      <td>
                            {{ priceRow.sku }}<span>{{ priceRow.variantCode }}</span>
                      </td>
                      <td>
                        <multiselect
                            track-by="groupId"
                            label="label"
                            v-model="priceRow.customerGroup"
                            :options="notUsedGroups(priceRow.currency,priceSearch.customerGroups,'')"
                            @select="updateCustomerGroup"
                            :showLabels=false
                            select-label="Select"
                            deselect-label="Deselect"
                            selected-label="Selected"
                            placeholder="Select a group">
                          <span slot="noResult">No group found</span>
                        </multiselect>
                      </td>
                      <td>
                        <input placeholder="Base price" v-model="priceRow.basePrice" type="number" step="any" style="margin: 0">
                      </td>
                      <td>
                        <input placeholder="Offer price" v-model="priceRow.offerPrice"  type="number" step="any" style="margin: 0">
                      </td>
                      <td>
                           {{ priceRow.currency }}
                      </td>
                      <td>
                          <span title="Delete" class="c-table-view-item__btn--edit" style="margin: 0">
                              <div class="c-table-view-item__btn-inner" @click="removePriceLine(priceSearch.prices['-'], index)">
                                 <svg class="ez-icon ez-icon-trash">
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                         xlink:href="/bundles/ezplatformadminui/img/ez-icons.svg#trash"></use>
                                </svg>
                              </div>
                         </span>

                      </td>
                    </tr>
                </tbody>
                </table>
             </div>
        </div>

        <div class="ez-table ez-table-subitems" v-if="priceSearch.status == 1 && priceSearch.variants.length != 0">


          <ul class="nav nav-tabs" id="variantTabs" >
                <li class="nav-item" v-for="(variant,variantCode) in priceSearch.variants">
                      <a class="nav-link" v-bind:id="'navtab-'+variantCode" data-toggle="tab" v-bind:href="'#tab-'+variantCode" role="tab" aria-selected="true">{{ variant.code1 }} {{ variant.code2 }}</a>
                </li>
          </ul>

          <div class="tab-content" id="variantTabs">

          <div class="tab-pane fade show active" v-bind:id="'tab-'+variantCode"  v-for="(variant,variantCode) in priceSearch.variants">

              <div class="ez-table-header" >

                <div class="ez-table-header__headline">
                    <strong>Prices for {{ priceSearch.name }}/{{ variant.description }} Variant={{ variantCode }} {{ (priceSearch.baseprice * currencyFactor).toFixed(2)}} {{ priceSearch.currency}} </strong>
                </div>
                <div>
                    <button type="submit" href="#" @click="addPriceLine(emptyLine,variantCode)" class="btn btn-primary">
                        <svg class="ez-icon ez-icon-create">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/bundles/ezplatformadminui/img/ez-icons.svg#create"></use>
                        </svg>
                    </button>
                </div>

                </div>
                  <div class="table-container" >
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>{{ translate('label.sku') }} {{ translate('label.variantcode') }}</th>
                                <th>{{ translate('label.customer_group') }}</th>
                                <th>{{ translate('label.base_price') }}</th>
                                <th>{{ translate('label.offer_price') }}</th>
                                <th>{{ translate('label.currency') }}</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>

                        <tr v-for="(priceRow, index) in priceSearch.prices[variantCode]" >
                          <td>
                                {{ priceRow.sku }} <span>{{ priceRow.variantCode }}</span>
                          </td>
                          <td>
                            <multiselect
                                track-by="groupId"
                                label="label"
                                v-model="priceRow.customerGroup"
                                :options="notUsedGroups(priceRow.currency,priceSearch.customerGroups,variantCode)"
                                @select="updateCustomerGroup"
                                select-label="Select"
                                deselect-label="Deselect"
                                selected-label="Selected"
                                placeholder="Select a group">
                              <span slot="noResult">No group found</span>
                            </multiselect>
                          </td>
                          <td>
                            <input placeholder="Base price" v-model="priceRow.basePrice"  type="number" step="any" style="margin: 0">
                          </td>
                          <td>
                            <input placeholder="Offer price" v-model="priceRow.offerPrice" type="number" step="any" style="margin: 0">
                          </td>
                          <td>
                               {{ priceRow.currency }}
                          </td>
                          <td>
                          <span title="Delete" class="c-table-view-item__btn--edit" style="margin: 0">
                              <div class="c-table-view-item__btn-inner" @click="removePriceLine(priceSearch.prices[variantCode], index)">
                                  <svg class="ez-icon ez-icon-create">
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                         xlink:href="/bundles/ezplatformadminui/img/ez-icons.svg#trash"></use>
                                  </svg>
                               </div>
                            </span>
                          </td>
                        </tr>
                    </tbody>
                    </table>
                 </div>
              </div>
        </div>
        </div>

        <div v-if="show_extra_add_button">
          <span>
            <button type="submit" href="#" @click="addPriceLine({sku: priceSearch.result.sku, variantCode: '', shopId: null})" class="ez-button ez-button-primary">
              <i class="fa fa-plus" aria-hidden="true">{{ translate('button.add_price_line')}}</i>
            </button>
          </span>
        </div>

        <div v-if="priceSearch.status == 1">
          <span>
            <button type="submit" href="#" @click="updatePrices()" class="btn btn-primary">
              <i class="fa fa-save" aria-hidden="true"></i> {{ translate('button.update_prices')}}
            </button>
          </span>
        </div>

        <span>* {{ translate('translations.required _fields') }}</span>
      </div>
       `,
    data: function () {
        return {

            customerGroups: [
                {
                    groupId: 1,
                    label: 'Group A',
                },
                {
                    groupId: 2,
                    label: 'Group B',
                }
            ],

            message: { type: ''},
            currency: 'EUR',
            currencyFactor: 1,
            currency_list: ['EUR', 'USD', 'CAD'],
            emptyLine: {
                shopId: '',
                sku: '',
                variantCode: '',
                currency: ''
            },
            priceSearch: {
                status: 0,
                variants: []
            },

            showSpinner: false,
            show_search_result: false,
            show_extra_add_button: false,
            token: '',
            translations:
               [
                   { code: 'label.sku',            translation: 'Sku'},
                   { code: 'label.variantcode',            translation: 'Variantcode'},
                   { code: 'button.update_prices', translation: 'Store price changes'},
                   { code: 'label.edit_prices',    translation: 'Edit price'},
                   { code: 'common.sku_tooltip',   translation: 'SKU tooltip'},
                   { code: 'label.customer_group',   translation: 'Customer group'},
                   { code: 'label.base_price',        translation: 'Base price'},
                   { code: 'label.offer_price',        translation: 'Offer price'},
                   { code: 'label.list_price',        translation: 'List price'},
                   { code: 'label.currency',        translation: 'Currency'},
                   { code: 'button.search',        translation: 'Search'},
                   { code: 'button.search',        translation: 'Search'},

                   { code: 'button.add_price_line',translation: 'Add new price'},
                   { code: 'button.update_prices', translation: 'Store price changes'},
                   { code: 'required fields',      translation: 'Required field'},
                   { code: 'no_price_found',       translation: 'No price found'},
                   { code: 'message.product_not_found', translation: 'Product not found'},
                   { code: 'message.no_prices_found', translation: 'There are no prices setup for this product'},
                   { code: 'message.price_stored', translation: 'Prices have been stored'},
                   { code: 'message.error_price_stored', translation: 'The price were not stored due to an error'},
                   { code: 'translations.required _fields', translation: 'required fields'},

                ],
                configUrls: {
                }
        }
    },
    props: ['sku','allowedit','intro','allowsearch'],
    mounted: function(){
        if (this.sku != '')
        {
            this.searchSku(this.sku);
        }

    },
    created: function(){

        var configJson = document.getElementById('ses-url-config').innerHTML;
        if (configJson != undefined) {
            this.configUrls = JSON.parse(document.getElementById('ses-url-config').innerHTML);
        }
    },
    computed: {
    },
    methods: {
        setCurrency: function(newCurrency) {
             this.currency =   newCurrency;
             this.currencyFactor = this.priceSearch.currencyList[newCurrency];
             this.searchSku(this.sku);

        },
        translate: function(code) {
            for (var trans in this.translations) {
                if (this.translations[trans].code  == code ) {
                    return this.translations[trans].translation;
                }
            }
            return code;
        },
        searchSku: function(sku) {


            this.showSpinner = true;

            var postData = {};

            postData.sku = sku;

            this.$http.post(this.configUrls.urlGetPrice+'/MAIN/'+this.currency, postData, {
                emulateJSON: true,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(function(response) {

                // Store found rows in search result
                this.updatePriceSearchResult(response);
                this.show_search_result = true;
                this.showSpinner = false;
            });
        },
        addPriceLine: function(formerLine,variantCode) {

            if (variantCode == '') {
                variantCode = '';
            }

            var newLine = {
                shopId: formerLine.shopId,
                sku: formerLine.sku,
                variantCode: variantCode,
                name: '',
                currency: this.currency,
                customerGroup: '',
                basePrice: '',
                offerPrice: ''
            };
            if (this.priceSearch.prices[variantCode] instanceof Array == false ||
                this.priceSearch.prices[variantCode] == null) {
                this.priceSearch.prices[variantCode] = [];

            }
            this.priceSearch.prices[variantCode].push(newLine);
            this.show_extra_add_button = false;

        },
        removePriceLine: function(arr, index) {
            arr.splice(index, 1);
        },
        updatePrices: function() {
            this.showSpinner = true;
            //this.emptyListMessage();
            var postData = {};
            this.priceSearch.currency = this.currency;
            postData.prices = this.priceSearch;

            this.$http.post(this.configUrls.urlUpdatePrice, postData, {
                emulateJSON: true,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(function(response) {
                this.showSpinner = false;
                this.message.type = 'success';
                this.message.text = this.translate('message.price_stored');
                this.priceSearch.sku = '';
                this.priceSearch.status = 0;
                this.searchSku(this.sku);
            },function(response) {
                this.message.type = 'alert';
                this.message.text = this.translate('message.error_price_stored');
                this.showSpinner = false;
                this.priceSearch.status = 0;
                this.searchSku(this.sku);
            });

        },
        updatePriceSearchResult: function(response) {
            this.priceSearch.result = [];
            this.show_extra_add_button = false;
            if (response.data.result.length == 0) {

                this.message.type = 'alert';
                this.message.text = this.translate('no_price_found');
                this.priceSearch.status = 0;
                return
            }
            if (response.data.result.message != undefined) {
                this.message.type = 'alert';
                this.priceSearch.status = 0;
                this.message.text = this.translate(response.data.result.message);
                return
            }

            this.message.type = '';
            this.message.text = '';

            this.priceSearch = response.data.result;

            this.customerGroups = this.priceSearch.customerGroups;
            this.emptyLine.sku = this.priceSearch.sku;
            this.emptyLine.shopId = this.priceSearch.shopId;
            this.emptyLine.currency = 'EUR'
            this.show_search_result = true;
        },
        updateCustomerGroup: function() {
            console.log("updateCustomerGroup ");
            console.log();
        },
        getGroupById: function(code, objectList) {
            for (var index in objectList){
                if (objectList[index].groupId == code ) {
                    return objectList[index];
                }
            }
            return code;
        },
        notUsedGroups: function(currency, groups, variantCode) {
            newGroups = [];
            for (var index in groups) {

                found = false;
                for (var data_index in this.priceSearch.prices[variantCode]) {
                    if (this.priceSearch.prices[variantCode][data_index].customerGroup.groupId == groups[index].groupId) {
                        found = true;
                    }
                }
                if (!found) {
                    group = {
                        groupId: groups[index].groupId,
                        label: groups[index].label
                    };
                    newGroups.push(group);
                }
            }

            return newGroups;
        }
    }
});
