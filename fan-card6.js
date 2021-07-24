class CustomFanCard extends Polymer.Element {

	static get template() {
		return Polymer.html `
            <style is="custom-style" include="iron-flex iron-flex-alignment"></style>
            <style>
                :host {
                    line-height: inherit;
				}
		        .speed {
                    min-width: 30px;
					max-width: 30px;
					height: 30px;
					margin-left: 2px;
                    margin-right: 2px;
    	            background-color: #759aaa;
					border: 1px solid lightgrey; 
					border-radius: 4px;
					font-size: 10px !important;
					color: inherit;
					text-align: center;
					float: right !important;
					padding: 1px;
					cursor: pointer;
				}
            </style>
             
            <hui-generic-entity-row hass="[[hass]]" config="[[_config]]">
				<div class='horizontal justified layout' on-click="stopPropagation">

                        <button
                            class='speed'
							style='[[_offCurrentColor]]'
                            toggles name="off"
                            on-tap='setPercentage'
                            on-click='setPercentage'>
                            <span>Off</span>
                        </button>

                        <button
                            class='speed'
							style='[[_1CurrentColor]]'
                            toggles name="1"
                            on-tap='setPercentage' 
                            on-click='setPercentage' 
                            disabled='[[_isOneSpeed]]'>
                            <span>1</span>
                        </button>						

                        <button
                            class='speed'
							style='[[_2CurrentColor]]'
                            toggles name="2"
                            on-click='setPercentage' 
                            on-tap='setPercentage' 
                            disabled='[[_isTwoSpeed]]'>
                            <span>2</span>
                        </button>

                        <button
                            class='speed'
							style='[[_3CurrentColor]]'
                            toggles name="3"
                            on-click='setPercentage' 
                            on-tap='setPercentage' 
                            on-click='setPercentage' 
							disabled='[[_isThreeSpeed]]'>
                            <span>3</span>
                        </button>

                        <button
                            class='speed'
							style='[[_4CurrentColor]]'
                            toggles name="4"
                            on-tap='setPercentage' 
                            on-click='setPercentage' 
                            disabled='[[_isFourSpeed]]'>
                            <span>4</span>
                        </button>

                        <button
                            class='speed'
							style='[[_5CurrentColor]]'
                            toggles name="5"
                            on-tap='setPercentage' 
                            on-click='setPercentage' 
                            disabled='[[_isFiveSpeed]]'>
                            <span>5</span>
                        </button>

                        <button
                            class='speed'
							style='[[_6CurrentColor]]'
                            toggles name="6"
                            on-tap='setPercentage' 
                            on-click='setPercentage' 
                            disabled='[[_isSixSpeed]]'>
                            <span>6</span>
                        </button>
                    </div>

            </hui-generic-entity-row>
        `;
	}

	static get properties() {
		return {
			hass: {
				type: Object,
				observer: 'hassChanged'
			},
			_config: Object,
			_stateObj: Object,
			_isOneSpeed: Boolean,
			_isTwoSpeed: Boolean,
			_isThreeSpeed: Boolean,
			_isFourSpeed: Boolean,
			_isFiveSpeed: Boolean,
			_isSixSpeed: Boolean,
			_percent1: Number,
			_percent2: Number,
			_percent3: Number,
			_percent4: Number,
			_percent5: Number,
			_percent6: Number,			
			_offCurrentColor: String,
			_1CurrentColor: String,
			_2CurrentColor: String,
			_3CurrentColor: String,
			_4CurrentColor: String,
			_5CurrentColor: String,
			_6CurrentColor: String,	
			}
	}

	setConfig(config) {
		this._config = config;

		this._config = {
            customTheme: false,
            customOffActiveColor: '#a33236',
            customSpeedActiveColor: '#458D02', 			
            customButtonOffColor: '#999999',
			...config
        };
	}
	
	hassChanged(hass) {
		const config = this._config;
		const stateObj = hass.states[config.entity];
        const custTheme = config.customTheme;

		// These values are the 6 speed/percentages for the ModernForms Fans
		// They are fixed values for this fan, they cannot be changed.		
		let percent1 = 16; 
		let percent2 = 33;
		let percent3 = 50;
		let percent4 = 66;
		let percent5 = 83;
		let percent6 = 100;
		
		let percent;
		if (stateObj && stateObj.attributes) {
			percent = stateObj.attributes.percentage || 'off';
		}

		let offCurrentColor;
		let	N1CurrentColor;
		let	N2CurrentColor;		
		let	N3CurrentColor;
		let	N4CurrentColor;				
		let	N5CurrentColor;		
		let	N6CurrentColor;		
	
		if (custTheme) {
			offCurrentColor = 'background-color:' + ((percent == 'off') ? config.customOffActiveColor : config.customButtonOffColor);
			N1CurrentColor  = 'background-color:' + ((percent == percent1) ? config.customSpeedActiveColor : config.customButtonOffColor);
			N2CurrentColor  = 'background-color:' + ((percent == percent2) ? config.customSpeedActiveColor : config.customButtonOffColor);
			N3CurrentColor  = 'background-color:' + ((percent == percent3) ? config.customSpeedActiveColor : config.customButtonOffColor);
			N4CurrentColor  = 'background-color:' + ((percent == percent4) ? config.customSpeedActiveColor : config.customButtonOffColor);
			N5CurrentColor  = 'background-color:' + ((percent == percent5) ? config.customSpeedActiveColor : config.customButtonOffColor);
			N6CurrentColor  = 'background-color:' + ((percent == percent6) ? config.customSpeedActiveColor : config.customButtonOffColor);	
		} else {
			offCurrentColor = 'background-color:' + ((percent == 'off') ? 'var(--primary-color)' : 'var(--disabled-text-color)');
			N1CurrentColor  = 'background-color:' + ((percent == percent1) ? 'var(--primary-color)' : 'var(--disabled-text-color)');
			N2CurrentColor  = 'background-color:' + ((percent == percent2) ? 'var(--primary-color)' : 'var(--disabled-text-color)');
			N3CurrentColor  = 'background-color:' + ((percent == percent3) ? 'var(--primary-color)' : 'var(--disabled-text-color)');
			N4CurrentColor  = 'background-color:' + ((percent == percent4) ? 'var(--primary-color)' : 'var(--disabled-text-color)');
			N5CurrentColor  = 'background-color:' + ((percent == percent5) ? 'var(--primary-color)' : 'var(--disabled-text-color)');
			N6CurrentColor  = 'background-color:' + ((percent == percent6) ? 'var(--primary-color)' : 'var(--disabled-text-color)');
		}	
		
		this.setProperties({
			_stateObj: stateObj,
			_percent1: percent1,
			_percent2: percent2,
			_percent3: percent3,
			_percent4: percent4,
			_percent5: percent5,
			_percent6: percent6,			
			_isOneSpeed: percent === percent1 && stateObj.state === 'on',
			_isTwoSpeed: percent === percent2 && stateObj.state === 'on',
			_isThreeSpeed: percent === percent3 && stateObj.state === 'on',
			_isFourSpeed: percent === percent4 && stateObj.state === 'on',
			_isFiveSpeed: percent === percent5 && stateObj.state === 'on',
			_isSixSpeed: percent === percent6 && stateObj.state === 'on',
			_offCurrentColor: offCurrentColor,
			_1CurrentColor: N1CurrentColor,
			_2CurrentColor: N2CurrentColor,
			_3CurrentColor: N3CurrentColor,
			_4CurrentColor: N4CurrentColor,
			_5CurrentColor: N5CurrentColor,
			_6CurrentColor: N6CurrentColor
			});
	}

	stopPropagation(e) {
		e.stopPropagation();
	}

	setPercentage(e) {
		const sSpeed = e.currentTarget.getAttribute('name')
		const param = {entity_id: this._config.entity};
		if ( sSpeed == 'off' ) {
			this.hass.callService('fan', 'turn_off', param);
		} else {
				switch(sSpeed) {
				case '1':
					param.percentage = this._percent1;
					break;
				case '2':
					param.percentage = this._percent2;
					break;
				case '3':
					param.percentage = this._percent3;
					break;
				case '4':
					param.percentage = this._percent4;
					break;
				case '5':
					param.percentage = this._percent5;
					break;
				case '6':
					param.percentage = this._percent6;
					break;
				default:
				    param.percentage = this._percent1;
					break;
				}
			this.hass.callService('fan', 'set_percentage', param);
		}			 		
	}
}

customElements.define('fan-card6', CustomFanCard);
