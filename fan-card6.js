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
                            on-tap='setSpeed'
                            on-click='setSpeed'>
                            <span>Off</span>
                        </button>

                        <button
                            class='speed'
							style='[[_1CurrentColor]]'
                            toggles name="1"
                            on-tap='setSpeed' 
                            on-click='setSpeed' 
                            disabled='[[_isOneSpeed]]'>
                            <span>1</span>
                        </button>						

                        <button
                            class='speed'
							style='[[_2CurrentColor]]'
                            toggles name="2"
                            on-click='setSpeed' 
                            on-tap='setSpeed' 
                            disabled='[[_isTwoSpeed]]'>
                            <span>2</span>
                        </button>

                        <button
                            class='speed'
							style='[[_3CurrentColor]]'
                            toggles name="3"
                            on-click='setSpeed' 
                            on-tap='setSpeed' 
                            on-click='setSpeed' 
							disabled='[[_isThreeSpeed]]'>
                            <span>3</span>
                        </button>

                        <button
                            class='speed'
							style='[[_4CurrentColor]]'
                            toggles name="4"
                            on-tap='setSpeed' 
                            on-click='setSpeed' 
                            disabled='[[_isFourSpeed]]'>
                            <span>4</span>
                        </button>

                        <button
                            class='speed'
							style='[[_5CurrentColor]]'
                            toggles name="5"
                            on-tap='setSpeed' 
                            on-click='setSpeed' 
                            disabled='[[_isFiveSpeed]]'>
                            <span>5</span>
                        </button>

                        <button
                            class='speed'
							style='[[_6CurrentColor]]'
                            toggles name="6"
                            on-tap='setSpeed' 
                            on-click='setSpeed' 
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
		
		let speed;
		if (stateObj && stateObj.attributes) {
			speed = stateObj.attributes.speed || 'off';
		}

		let offCurrentColor;
		let	N1CurrentColor;
		let	N2CurrentColor;		
		let	N3CurrentColor;
		let	N4CurrentColor;				
		let	N5CurrentColor;		
		let	N6CurrentColor;		
		
		if (custTheme) {
			offCurrentColor = 'background-color:' + ((speed == 'off') ? config.customOffActiveColor : config.customButtonOffColor);
			N1CurrentColor  = 'background-color:' + ((speed == '1') ? config.customSpeedActiveColor : config.customButtonOffColor);
			N2CurrentColor  = 'background-color:' + ((speed == '2') ? config.customSpeedActiveColor : config.customButtonOffColor);
			N3CurrentColor  = 'background-color:' + ((speed == '3') ? config.customSpeedActiveColor : config.customButtonOffColor);
			N4CurrentColor  = 'background-color:' + ((speed == '4') ? config.customSpeedActiveColor : config.customButtonOffColor);
			N5CurrentColor  = 'background-color:' + ((speed == '5') ? config.customSpeedActiveColor : config.customButtonOffColor);
			N6CurrentColor  = 'background-color:' + ((speed == '6') ? config.customSpeedActiveColor : config.customButtonOffColor);	
		} else {
			offCurrentColor = 'background-color:' + ((speed == 'off') ? 'var(--primary-color)' : 'var(--disabled-text-color)');
			N1CurrentColor  = 'background-color:' + ((speed == '1') ? 'var(--primary-color)' : 'var(--disabled-text-color)');
			N2CurrentColor  = 'background-color:' + ((speed == '2') ? 'var(--primary-color)' : 'var(--disabled-text-color)');
			N3CurrentColor  = 'background-color:' + ((speed == '3') ? 'var(--primary-color)' : 'var(--disabled-text-color)');
			N4CurrentColor  = 'background-color:' + ((speed == '4') ? 'var(--primary-color)' : 'var(--disabled-text-color)');
			N5CurrentColor  = 'background-color:' + ((speed == '5') ? 'var(--primary-color)' : 'var(--disabled-text-color)');
			N6CurrentColor  = 'background-color:' + ((speed == '6') ? 'var(--primary-color)' : 'var(--disabled-text-color)');
		}	
		
		this.setProperties({
			_stateObj: stateObj,
			_isOneSpeed: speed === '1' && stateObj.state === 'on',
			_isTwoSpeed: speed === '2' && stateObj.state === 'on',
			_isThreeSpeed: speed === '3' && stateObj.state === 'on',
			_isFourSpeed: speed === '4' && stateObj.state === 'on',
			_isFiveSpeed: speed === '5' && stateObj.state === 'on',
			_isSixSpeed: speed === '6' && stateObj.state === 'on',
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

	setSpeed(e) {
		const speed = e.currentTarget.getAttribute('name');
		this.hass.callService('fan', 'set_speed', {
			entity_id: this._config.entity, speed: speed
		});
	}
}

customElements.define('fan-card6', CustomFanCard);