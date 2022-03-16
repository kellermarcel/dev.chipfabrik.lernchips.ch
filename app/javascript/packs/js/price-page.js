import plans from './plans.json';

var mobe = mobe || {};

mobe = new function() {

    this.screenWidth = document.body.clientWidth;

    this.reqHost = window.location.host;

    this.wrapperPrices = document.getElementById("wrapPrices");

    //here muessen wir die Ausgabe aendern - in ener Loop machen
    this.blockDeskTop = `
    <thead>
        <tr>
            <th class='th-first'>Price Plans</th>
            <th class='tcell-remains'>
                <div class='schield'>
                    <h3 class='cell-head'>Kostenloses</h3>
                    <p class='cell-text'>Praesent vel fringilla est  odio id tellus.</p>
                    <p class='cell-price'>Free</p>
                    <a href='javascript:void(0);' class='btn btn-yellow'>Subscribe</a>
                </div>
            </th>
            <th class='tcell-remains'>
                <div class='schield'>
                    <h3 class='cell-head'>Anwender Plus</h3>
                    <p class='cell-text'>Vivamus volutpat sem sed molestie tincidunt</p>
                    <p class='cell-price'>From 7 EUR/mo</p>
                    <a href='javascript:void(0);' class='btn btn-yellow'>Subscribe</a>
                </div>
            </th>
            <th class='tcell-remains'>
                <div class='schield'>
                    <h3 class='cell-head'>Institutionen</h3>
                    <p class='cell-text'>Sed viverra dictum sapie vitae volutpat nisl sed.</p>
                    <p class='cell-price'>From 20 EUR/mo</p>
                    <a href='javascript:void(0)' class='btn btn-yellow'>Subscribe</a>
                </div>
            </th>
        </tr>
    </thead>
    `;

    this.showDeskTable = function() {
        var self = this, tdeskBody = document.createElement('tbody'),
        fragment = document.createDocumentFragment();
        const qualFeature = plans[0].content.length;

        for(var i = 0; i < qualFeature; i++) {
            var trow = document.createElement('tr');
            const th = document.createElement('th');
            th.innerText = plans[0].content[i].name;
            trow.appendChild(th);
            fragment.appendChild(trow);

            for(var j = 0; j < plans.length; j++) {
                const td = document.createElement('td');
                td.innerHTML = `
                    <svg class='icon'>
                        <use xlink:href="./img/reg-icons.svg#${plans[j].content[i].val}"></use>
                    </svg>
                `;
                trow.appendChild(td);
            }
        }

        tdeskBody.appendChild(fragment);
        return tdeskBody;
    };

    this.blockMobileTop = function() {
        var tabButtons = document.createElement('div');
        tabButtons.classList.add('tab-buttons');
        var priceTitle = document.createElement('h3');
        priceTitle.classList.add('price-title');
        priceTitle.innerHTML = "Price Plans"
        for(var i = 0; i < plans.length; i++) {
            const tabHead = document.createElement('div');
            tabHead.dataset.panel = 'panel_' + i;
            if(i == 0) {
                tabHead.classList.add('tab-head', 'active');
            } else {
                tabHead.classList.add('tab-head');
            }
            const text = document.createTextNode(plans[i].name);
            tabHead.appendChild(text);
            tabButtons.appendChild(tabHead);
        }
        this.wrapperPrices.appendChild(priceTitle);
        this.wrapperPrices.appendChild(tabButtons);
    };

    this.blockMobileColumn = function() {
        var tabPanels = document.createElement('div'), tabPanel,
        fragment = document.createDocumentFragment();
        tabPanels.classList.add('tab-panels');

        for(var i = 0; i < plans.length; i++) {
            const feature = plans[i].content
            tabPanel = document.createElement('div');
            tabPanel.id = 'panel_' + i;
            if(i == 0) {
                tabPanel.classList.add('panel', 'active');
            } else {
                tabPanel.classList.add('panel');
            }
            //add block priceInfo
            let priceInfo = `
            <div class='m-schield'>
                <h3 class='mcell-head'>${plans[i].name}</h3>
                <p class='mcell-text'>${plans[i].description}</p>
                <p class='mcell-price'>${plans[i].price}</p>
                <a href='javascript:void(0);' class='btn btn-yellow'>Subscribe</a>
            </div>
            `;
            tabPanel.innerHTML = priceInfo;

            //run new loop on feature
            for(var j = 0; j < feature.length; j++) {
                var featureWrap = document.createElement('div');
                featureWrap.classList.add('feature-wrap');
                const elName = document.createElement('span');
                const elVal = document.createElement('span');
                const featureName = document.createTextNode(feature[j].name);
                const featureVal = `
                    <svg class='icon'>
                        <use xlink:href="./img/reg-icons.svg#${feature[j].val}"></use>
                    </svg>
                `;
                elName.appendChild(featureName);
                elVal.innerHTML = featureVal;
                featureWrap.appendChild(elName);
                featureWrap.appendChild(elVal);
                tabPanel.appendChild(featureWrap);
            }
            fragment.appendChild(tabPanel);
        }

        tabPanels.appendChild(fragment);
        this.wrapperPrices.appendChild(tabPanels);
    };

    this.pricePage = function() {
        const self = this;
        if(self.screenWidth <= 768) {
            self.blockMobileTop();
            self.blockMobileColumn();
        } else {
            const tableTag = document.createElement('table');
            tableTag.classList.add('table-price');
            const tableBod = self.showDeskTable();
            tableTag.insertAdjacentHTML('afterbegin', self.blockDeskTop);
            tableTag.appendChild(tableBod);
            self.wrapperPrices.appendChild(tableTag);
        }
    };

    this.resizeWindow = function() {
        window.addEventListener('resize', ev => {
            let self = this;
            this.screenWidth = document.body.clientWidth;
            setTimeout(function(){
                if(self.screenWidth <= 768) {
                    self.wrapperPrices.innerHTML = self.blockMobileTop;
                } else {
                    self.wrapperPrices.innerHTML = self.blockDeskTop;
                }
            }, 650);
            window.location.href = 'http://' + this.reqHost + '/prices-page.html';
        }, false);
    };

    this.showPanel = function(panel, btns, panels) {
        for (var i = 0; i < btns.length; i++) {
            btns[i].classList.remove('active');
        }

        for (var j = 0; j < panels.length; j++) {
            panels[j].classList.remove('active');
        }

        const elem = document.getElementById(panel);
        elem.classList.add('active');
        const btn = document.querySelector('[data-panel=' + panel +']');
        btn.classList.add('active');
    };

    this.tabsClick = function() {
        var self = this;
        this.wrapperPrices.addEventListener('click', function(ev){
            var tabBtns = document.querySelectorAll('.tab-head');
            var tabPanels = document.querySelectorAll('.tab-panels .panel');

            if( ev.target.classList.contains('tab-head') ) {
                const panel = ev.target.dataset.panel;
                self.showPanel(panel, tabBtns, tabPanels);
            }
        }, true);
    }
};

document.addEventListener('DOMContentLoaded', function() {
	mobe.pricePage();
    mobe.resizeWindow();
    mobe.tabsClick();
}, false);
