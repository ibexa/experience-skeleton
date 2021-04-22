Vue.component("editstock", {
    template: `
     <div class="editstock">

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
            The Stock management allows to setup stock manually. Search for a sku and update the stock.
        </p>
         <div v-if="message.type != ''">
               <div class="alert-box alert" v-if="message.type == 'alert'">
                    {{ message.text }}
               </div>
               <div class="alert-box info" v-if="message.type == 'success'">
                    {{ message.text }}
               </div>
          </div>


          <div class="ez-table ez-table-subitems" v-if="stockData.status == 1" >

          <div class="ez-table-header">
            <div class="ez-table-header__headline">
                <strong>Stock  </strong>
            </div>


            </div>
              <div class="table-container">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>{{ translate('label.sku') }}</th>

                            <th>{{ translate('label.stock') }}</th>
                            <th>{{ translate('label.stock_sign') }}</th>
                        </tr>
                    </thead>

                    <tbody>

                    <tr v-for="(stock, variantCode) in stockData.stock" >
                      <td>
                            <span>{{ stockData.sku }} {{ variantCode }}</span> ({{ stock.name }})
                      </td>

                      <td>
                        <input placeholder="Stock numeric" v-model="stock.stock">
                      </td>
                      <td>
                        <input placeholder="Stock sign text" v-model="stock.stockSign">
                      </td>

                    </tr>
                </tbody>
                </table>
             </div>
        </div>



        <div v-if="show_extra_add_button">
          <span>
            <button type="submit" href="#" @click="addPriceLine({sku: priceSearch.result.sku, variantCode: '', shopId: null})" class="ez-button ez-button-primary">
              <i class="fa fa-plus" aria-hidden="true">{{ translate('button.add_price_line')}}</i>
            </button>
          </span>
        </div>

        <div v-if="stockData.status == 1">
          <span>
            <button type="submit" href="#" @click="updateStock()" class="btn btn-primary">
              <i class="fa fa-save" aria-hidden="true"></i> {{ translate('button.update_stock')}}
            </button>
          </span>
        </div>

        <span>* {{ translate('translations.required _fields') }}</span>
      </div>
       `,
    data: function () {
        return {

            stockData: {},

            message: { type: ''},
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
                   { code: 'label.sku',           translation: 'Sku'},
                   { code: 'label.variantcode',   translation: 'Variantcode'},
                   { code: 'button.update_stock', translation: 'Update stock'},
                   { code: 'label.edit_stock',    translation: 'Edit stock'},
                   { code: 'label.stock',         translation: 'On stock'},
                   { code: 'label.stock_sign',    translation: 'Stock text'},

                   { code: 'button.search',        translation: 'Search'},
                   { code: 'button.search',        translation: 'Search'},


                   { code: 'required fields',      translation: 'Required field'},
                   { code: 'no_price_found',       translation: 'No price found'},
                   { code: 'message.product_not_found', translation: 'Product not found'},

                   { code: 'message.stock_stored', translation: 'Stock has been stored'},
                   { code: 'message.error_stock_stored', translation: 'The stock was not stored due to an error'},
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
            var restUrl = this.configUrls.urlGetStock;
            var postData = {};

            postData.sku = sku;
            this.$http.post(restUrl, postData, {
                emulateJSON: true,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(function(response) {
                console.log(response);
                // Store found rows in search result
                this.stockData = response.body;
                this.show_search_result = true;
                this.showSpinner = false;
            });
        },

        updateStock: function() {
            this.showSpinner = true;
            //this.emptyListMessage();
            var postData = {};
            postData.stock = this.stockData;
            this.$http.post(this.configUrls.urlUpdateStock, postData, {
                emulateJSON: true,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(function(response) {
                this.showSpinner = false;
                this.message.type = 'success';
                this.message.text = this.translate('message.stock_stored');
                this.priceSearch.sku = '';
                this.priceSearch.status = 0;
                this.searchSku(this.sku);
            },function(response) {
                this.message.type = 'alert';
                this.message.text = this.translate('message.error_stock_stored');
                this.showSpinner = false;
                this.priceSearch.status = 0;
                this.searchSku(this.sku);
            });

        }

    }
});
