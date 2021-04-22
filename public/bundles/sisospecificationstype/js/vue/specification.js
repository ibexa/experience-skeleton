Vue.component("specification", {
    template: `
    <div class="ez-field-edit__data ez-field-edit--with-preview ses_specification">

        <div class="ez-data-source">
            <input v-model="json_field" v-bind:id="id" v-bind:name="name" type="hidden" v-bind:value="value" class="ez-data-source__input form-control" />

            <div class="ez-field-edit-preview" style="display: block; margin-bottom: 10px; padding-bottom: 25px;"
                 v-for="(group,index_group) in spec_data">

                <div class="ez-field-edit__label-wrapper">
                    <legend class="col-form-legend">
                        {{ getGroupLabel(group.name) }}
                    </legend>
                </div>

                <button v-if="group.data == null || group.data.length == 0 || Object.keys(group.data).length === 0" type="button" style="margin-bottom: 10px;" class="btn btn-danger"
                        @click="removeElement(spec_data, index_group)">{{ translate('button.remove_group') }}
                </button>
                <button v-if="group.data == null || group.data.length == 0 || Object.keys(group.data).length === 0" type="button" style="margin-bottom: 10px;" class="btn btn-primary" @click="addSpec(index_group)">
                    <svg class="ez-icon ez-icon-create">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/bundles/ezplatformadminui/img/ez-icons.svg#create"></use>
                           </svg>
                </button> 
                <div style="display: flex;" v-for="(spec,index) in group.data">
                    <div class="ez-field-edit-preview__visual">

                        <div class="container">
                            <div class="row">
                                <div class="col-sm">
                                    <div class="ez-field-edit-preview__input-wrapper">
                                        <input placeholder="Specification" type="text" v-model="spec.label"
                                               class="ez-field-edit-preview__input form-control"/>
                                    </div>
                                </div>
                                <div class="col-sm">
                                    <div class="ez-field-edit-preview__input-wrapper">
                                        <input placeholder="Value" type="text" v-model="spec.value"
                                               class="ez-field-edit-preview__input form-control"/>
                                    </div>
                                </div>

                                <div class="col-sm-2">
                                    <select v-if="getOptions(group, index) !== null" v-model='spec.selected_option'
                                    class="ez-data-source__input form-control">
                                        <option disabled value="">Select an option</option>
                                        <option v-for="option in getOptions(group, index)">
                                            {{ option }}
                                        </option>
                                    </select>
                                </div>

                                <div class="col-sm">
                                    <button @click="removeElement(group.data, index);" type="button" class="btn btn-primary">
                                        <svg class="ez-icon">
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="/bundles/ezplatformadminui/img/ez-icons.svg#trash"></use>
                                        </svg>
                                    </button>
                                    <button @click="addSpec(index_group);" type="button" class="btn btn-primary " >
                                       <svg class="ez-icon">
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                            xlink:href="/bundles/ezplatformadminui/img/ez-icons.svg#create"></use>
                                       </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

      <span v-for="group in not_used_groups">
          <button type="button" class="btn btn-primary" @click="addGroup(group)">
              <svg class="ez-icon ez-icon-create">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink"
                       xlink:href="/bundles/ezplatformadminui/img/ez-icons.svg#create"></use>
              </svg>
              {{ group.label }}
          </button>
            &nbsp;
      </span>
    </div>
       `,
    data: function () {
        return {

            spec_data: [
                //{  name: 'marketing',
                //    data: {}
                //}
            ],
            translations: [
                {code: 'button.add_element', translation: 'Add attribute'},
                {code: 'button.remove_group', translation: 'Remove group'}
            ],
            spec_groups: [],
            not_used_groups: [],
            json_field_input: '' }
    },
    props: ['id','name','value', 'spec_groups_json'],
    mounted: function(){
        this.not_used_groups = JSON.parse(JSON.stringify(this.spec_groups));


        if (this.value != '' && this.value != "Array") {

            var spec = JSON.parse(this.value);
            this.spec_data = spec;

        } else {
            this.spec_data = [];
            this.value = "";
        }

        if (this.spec_groups_json !== undefined && this.spec_groups_json != "") {
            this.spec_groups = JSON.parse(this.spec_groups_json);
        }
        this.updateNotUsedGroups();
    },
    computed: {
        json_field: function () {
                return JSON.stringify(this.spec_data);
        }

    },
    methods: {
        translate: function (code) {
            for (var trans in this.translations) {
                if (this.translations[trans].code == code) {
                    return this.translations[trans].translation;
                }
            }

            return code;
        },
        importJson: function(s)
        {

            this.spec_data = JSON.parse(this.json_field_input);
        },
        addSpec: function(group) {

            var newSpec = {
                label: '',
                value: ''
            };
            if (this.spec_data[group].data instanceof Array == false || this.spec_data[group].data == null) {
                console.log("No array !");
                this.spec_data[group].data = [];
            }

            //TODO: Remove this logs later

            this.spec_data[group].data.push(Vue.util.extend({}, newSpec));
            return false;
        },
        addGroup: function(group) {

            var default_values = (group.default_values !== undefined)?JSON.parse(JSON.stringify(group.default_values)):[];
            var newGroup = {
                name: group.code,
                data: default_values
            };

            this.spec_data.push(Vue.util.extend({}, newGroup));
            this.updateNotUsedGroups();
        },
        getGroupLabel: function(code) {
            for (var index in this.spec_groups){
                if (this.spec_groups[index].code == code) {
                    return this.spec_groups[index].label;
                }
            }
            return "No label found for code: "+code;
        },
        removeElement: function (arr, index) {

            arr.splice(index, 1);
            this.updateNotUsedGroups();
        },

        updateNotUsedGroups: function () {

            var newGroups = [];
            for (var index in this.spec_groups) {

                var found = false;
                for (var data_index in this.spec_data) {

                    if (this.spec_groups[index].code == this.spec_data[data_index].name) {
                        found = true;
                    }
                }
                if (!found) {
                    var group = {
                        code: this.spec_groups[index].code,
                        label: this.spec_groups[index].label,
                        default_values: this.spec_groups[index].default_values
                    };
                    newGroups.push(group);
                }
            }


            // ToDo filter groups
            this.not_used_groups = newGroups;
        },

        getOptions: function (group, spec_index) {
            // find matching spec group
            for (var i = 0; i < this.spec_groups.length; i++) {

                if (this.spec_groups[i].code !== group.name ) {
                    continue;
                }

                var spec_group = this.spec_groups[i];
                break;
            }

            // prioritize options for individual spec, use group level options otherwise
            // return null if no options are found

            var options = null;

            if (spec_group.default_values !== null &&
                spec_group.default_values[spec_index] !== undefined
                && spec_group.default_values[spec_index].options !== undefined) {
                options = spec_group.default_values[spec_index].options;
            } else if (spec_group.options !== undefined && spec_group.options.length > 0) {
                if (spec_group.options !== undefined) {
                    options = spec_group.options;
                }

            }

            return options;
        }
    }
});
