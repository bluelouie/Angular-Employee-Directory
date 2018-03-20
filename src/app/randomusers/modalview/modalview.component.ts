import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modalview',
  templateUrl: './modalview.component.html',
  styleUrls: ['./modalview.component.css']
})
export class ModalviewComponent implements OnInit {



  @Input() user;
  @Input() modalToggle;
  @Output() change = new EventEmitter();


  closeModal($event) {
    $event.stopPropagation();
    const target = $event.target.className;
    if (target === 'modal') {
      this.change.emit();
    } else if (target === 'close') {
      this.change.emit();
    }
  }

  dobArrange(dob) {
    const year = dob.slice(0, 4);
    const month = dob.slice(5, 7);
    const day = dob.slice(8, 10);
    const date = month + '/' + day + '/' + year;
    return date;
  }


  // Convert State name to Shorter name(Thanks! https://gist.github.com/calebgrove/c285a9510948b633aa47)

  abbrRegion(input, to) {
    const states = [
      ['Alabama', 'AL'],
      ['Alaska', 'AK'],
      ['American Samoa', 'AS'],
      ['Arizona', 'AZ'],
      ['Arkansas', 'AR'],
      ['Armed Forces Americas', 'AA'],
      ['Armed Forces Europe', 'AE'],
      ['Armed Forces Pacific', 'AP'],
      ['California', 'CA'],
      ['Colorado', 'CO'],
      ['Connecticut', 'CT'],
      ['Delaware', 'DE'],
      ['District Of Columbia', 'DC'],
      ['Florida', 'FL'],
      ['Georgia', 'GA'],
      ['Guam', 'GU'],
      ['Hawaii', 'HI'],
      ['Idaho', 'ID'],
      ['Illinois', 'IL'],
      ['Indiana', 'IN'],
      ['Iowa', 'IA'],
      ['Kansas', 'KS'],
      ['Kentucky', 'KY'],
      ['Louisiana', 'LA'],
      ['Maine', 'ME'],
      ['Marshall Islands', 'MH'],
      ['Maryland', 'MD'],
      ['Massachusetts', 'MA'],
      ['Michigan', 'MI'],
      ['Minnesota', 'MN'],
      ['Mississippi', 'MS'],
      ['Missouri', 'MO'],
      ['Montana', 'MT'],
      ['Nebraska', 'NE'],
      ['Nevada', 'NV'],
      ['New Hampshire', 'NH'],
      ['New Jersey', 'NJ'],
      ['New Mexico', 'NM'],
      ['New York', 'NY'],
      ['North Carolina', 'NC'],
      ['North Dakota', 'ND'],
      ['Northern Mariana Islands', 'NP'],
      ['Ohio', 'OH'],
      ['Oklahoma', 'OK'],
      ['Oregon', 'OR'],
      ['Pennsylvania', 'PA'],
      ['Puerto Rico', 'PR'],
      ['Rhode Island', 'RI'],
      ['South Carolina', 'SC'],
      ['South Dakota', 'SD'],
      ['Tennessee', 'TN'],
      ['Texas', 'TX'],
      ['US Virgin Islands', 'VI'],
      ['Utah', 'UT'],
      ['Vermont', 'VT'],
      ['Virginia', 'VA'],
      ['Washington', 'WA'],
      ['West Virginia', 'WV'],
      ['Wisconsin', 'WI'],
      ['Wyoming', 'WY'],
    ];

    // So happy that Canada and the US have distinct abbreviations
    const provinces = [
      ['Alberta', 'AB'],
      ['British Columbia', 'BC'],
      ['Manitoba', 'MB'],
      ['New Brunswick', 'NB'],
      ['Newfoundland', 'NF'],
      ['Northwest Territory', 'NT'],
      ['Nova Scotia', 'NS'],
      ['Nunavut', 'NU'],
      ['Ontario', 'ON'],
      ['Prince Edward Island', 'PE'],
      ['Quebec', 'QC'],
      ['Saskatchewan', 'SK'],
      ['Yukon', 'YT'],
    ];

    const regions = states.concat(provinces);

    let i; // Reusable loop variable
    if (to === 'abbr') {
      input = input.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
      for (i = 0; i < regions.length; i++) {
        if (regions[i][0] === input) {
          return (regions[i][1]);
        }
      }
    } else if (to === 'name') {
      input = input.toUpperCase();
      for (i = 0; i < regions.length; i++) {
        if (regions[i][1] === input) {
          return (regions[i][0]);
        }
      }
    }
  }

  constructor() {

  }


  ngOnInit() {
  }

}
