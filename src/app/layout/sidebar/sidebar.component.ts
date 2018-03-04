import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-layout-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  menu: any;
  constructor() { }

  ngOnInit() {
    const creationChild: any = [
      { icon: 'fa fa-500px', name: 'BindCallback', path: ['/creation/main', 'bindcallback'] },
      { icon: 'fa fa-adn', name: 'BindNodeCallback', path: ['/creation/main', 'bindnodecallback'] },
      { icon: 'fa fa-amazon', name: 'Create', path: ['/creation/main', 'create'] },
      { icon: 'fa fa-android', name: 'Defer', path: ['/creation/main', 'defer'] },
      { icon: 'fa fa-angellist', name: 'Empty', path: ['/creation/main', 'empty'] },
      { icon: 'fa fa-apple', name: 'From', path: ['/creation/main', 'from'] },
      { icon: 'fa fa-bandcamp', name: 'FromEvent', path: ['/creation/main', 'fromevent'] },
      { icon: 'fa fa-behance', name: 'FromEventPattern', path: ['/creation/main', 'fromeventpattern'] },
      { icon: 'fa fa-btc', name: 'FromPromise', path: ['/creation/main', 'frompromise'] },
      { icon: 'fa fa-bitbucket-square', name: 'Generate', path: ['/creation/main', 'generate'] },
      { icon: 'fa fa-bitbucket ', name: 'Interval', path: ['/creation/main', 'interval'] },
      { icon: 'fa fa-behance-square ', name: 'Never', path: ['/creation/main', 'never'] },
      { icon: 'fa fa-black-tie', name: 'Of', path: ['/creation/main', 'of'] },
      { icon: 'fa fa-bluetooth', name: 'Repeat', path: ['/creation/main', 'repeat'] },
      { icon: 'fa fa-buysellads', name: 'RepeatWhen', path: ['/creation/main', 'repeatwhen'] },
      { icon: 'fa fa-cc-amex', name: 'Range', path: ['/creation/main', 'range'] },
      { icon: 'fa fa-cc-diners-club', name: 'Throw', path: ['/creation/main', 'throw'] },
      { icon: 'fa fa-cc-discover', name: 'Timer', path: ['/creation/main', 'timer'] },
    ];

    const transfromationChild: any = [
      { icon: 'fa fa-cc-stripe ', name: 'Buffer', path: ['/transformation/main', 'buffer'] },
      { icon: 'fa fa-cc-paypal', name: 'BufferCount', path: ['/transformation/main', 'buffercount'] },
      { icon: 'fa fa-cc-mastercard', name: 'BufferTime', path: ['/transformation/main', 'buffertime'] },
      { icon: 'fa fa-cc-jcb', name: 'BufferToggle', path: ['/transformation/main', 'buffertoggle'] },
      { icon: 'fa fa-cc-visa', name: 'BufferWhen', path: ['/transformation/main', 'bufferwhen'] },
      { icon: 'fa fa-chrome ', name: 'ConcatMap', path: ['/transformation/main', 'concatmap'] },
      { icon: 'fa fa-codepen', name: 'ConcatMapTo', path: ['/transformation/main', 'concatmapto'] },
      { icon: 'fa fa-codiepie', name: 'ExhaustMap', path: ['/transformation/main', 'exhaustmap'] },
      { icon: 'fa fa-dashcube', name: 'Expand', path: ['/transformation/main', 'expand'] },
      { icon: 'fa fa-css3', name: 'GroupBy', path: ['/transformation/main', 'groupby'] },
      { icon: 'fa fa-contao', name: 'Map', path: ['/transformation/main', 'map'] },
      { icon: 'fa fa-connectdevelop', name: 'MapTo', path: ['/transformation/main', 'mapto'] },
      { icon: 'fa fa-instagram ', name: 'MergeMap', path: ['/transformation/main', 'mergemap'] },
      { icon: 'fa fa-imdb', name: 'MergeMapTo', path: ['/transformation/main', 'mergemapto'] },
      { icon: 'fa fa-html5 ', name: 'MergeScan', path: ['/transformation/main', 'mergescan'] },
      { icon: 'fa fa-houzz', name: 'Pairwise', path: ['/transformation/main', 'pairwise'] },
      { icon: 'fa fa-google-wallet ', name: 'Partition', path: ['/transformation/main', 'partition'] },
      { icon: 'fa fa-gratipay', name: 'Pluck', path: ['/transformation/main', 'pluck'] },
      { icon: 'fa fa-grav', name: 'Scan', path: ['/transformation/main', 'scan'] },
      { icon: 'fa fa-hacker-news', name: 'SwitchMap', path: ['/transformation/main', 'switchmap'] },
      { icon: 'fa fa-google-plus-official ', name: 'SwitchMapTo', path: ['/transformation/main', 'switchmapto'] },
      { icon: 'fa fa-gratipay', name: 'Window', path: ['/transformation/main', 'window'] },
      { icon: 'fa fa-glide-g', name: 'WindowCount', path: ['/transformation/main', 'windowcount'] },
      { icon: 'fa fa-google ', name: 'WindowTime', path: ['/transformation/main', 'windowtime'] },
      { icon: 'fa fa-gitlab', name: 'WindowToggle', path: ['/transformation/main', 'windowtoggle'] },
      { icon: 'fa fa-github-alt', name: 'WindowWhen', path: ['/transformation/main', 'windowwhen'] }
    ];

    const filteringChild: any = [
      { icon: 'fa fa-github ', name: 'Debounce', path: ['/filtering/main', 'debounce'] },
      { icon: 'fa fa-gg-circle', name: 'DebounceTime', path: ['/filtering/main', 'debouncetime'] },
      { icon: 'fa fa-git-square', name: 'Distinct', path: ['/filtering/main', 'distinct'] },
      { icon: 'fa fa-get-pocket', name: 'DistinctKey', path: ['/filtering/main', 'distinctkey'] },
      { icon: 'fa fa-free-code-camp', name: 'DistinctUntilChanged', path: ['/filtering/main', 'distinctuntilchanged'] },
      { icon: 'fa fa-foursquare', name: 'DistinctUntilKeyChanged', path: ['/filtering/main', 'distinctuntilkeychanged'] },
      { icon: 'fa fa-font-awesome ', name: 'ElementAt', path: ['/filtering/main', 'elementat'] },
      { icon: 'fa fa-fonticons', name: 'Filter', path: ['/filtering/main', 'filter'] },
      { icon: 'fa fa-fort-awesome', name: 'First', path: ['/filtering/main', 'first'] },
      { icon: 'fa fa-forumbee', name: 'IgnoreElements', path: ['/filtering/main', 'ignoreelements'] },
      { icon: 'fa fa-flickr', name: 'Audit', path: ['/filtering/main', 'audit'] },
      { icon: 'fa fa-first-order', name: 'AuditTime', path: ['/filtering/main', 'audittime'] },
      { icon: 'fa fa-firefox', name: 'Last', path: ['/filtering/main', 'last'] },
      { icon: 'fa fa-font-awesome', name: 'Sample', path: ['/filtering/main', 'sample'] },
      { icon: 'fa fa-facebook-official', name: 'SampleTime', path: ['/filtering/main', 'sampletime'] },
      { icon: 'fa fa-expeditedssl', name: 'Single', path: ['/filtering/main', 'single'] },
      { icon: 'fa fa-etsy', name: 'Skip', path: ['/filtering/main', 'skip'] },
      { icon: 'fa fa-envira', name: 'SkipLast', path: ['/filtering/main', 'skiplast'] },
      { icon: 'fa fa-empire', name: 'SkipUntil', path: ['/filtering/main', 'skipuntil'] },
      { icon: 'fa fa-dropbox', name: 'SkipWhile', path: ['/filtering/main', 'skipwhile'] },
      { icon: 'fa fa-drupal', name: 'Take', path: ['/filtering/main', 'take'] },
      { icon: 'fa fa-edge', name: 'TakeLast', path: ['/filtering/main', 'takelast'] },
      { icon: 'fa fa-eercast', name: 'TakeUntil', path: ['/filtering/main', 'takeuntil'] },
      { icon: 'fa fa-dribbble', name: 'TakeWhile', path: ['/filtering/main', 'takewhile'] },
      { icon: 'fa fa-digg', name: 'Throttle', path: ['/filtering/main', 'throttle'] },
      { icon: 'fa fa-deviantart', name: 'ThrottleTime', path: ['/filtering/main', 'throttletime'] }
    ];

    const combinationChild: any = [
      { icon: 'fa fa-delicious', name: 'CombineAll', path: ['/combination/main', 'combineall'] },
      { icon: 'fa fa-sellsy', name: 'CombineLatest', path: ['/combination/main', 'combinelatest'] },
      { icon: 'fa fa-share-alt-square', name: 'Concat', path: ['/combination/main', 'concat'] },
      { icon: 'fa fa-shirtsinbulk', name: 'ConcatAll', path: ['/combination/main', 'concatall'] },
      { icon: 'fa fa-scribd', name: 'Exhaust', path: ['/combination/main', 'exhaust'] },
      { icon: 'fa fa-safari ', name: 'ForkJoin', path: ['/combination/main', 'forkjoin'] },
      { icon: 'fa fa-renren', name: 'Merge', path: ['/combination/main', 'merge'] },
      { icon: 'fa fa-reddit', name: 'MergeAll', path: ['/combination/main', 'mergeall'] },
      { icon: 'fa fa-reddit-square', name: 'Race', path: ['/combination/main', 'race'] },
      { icon: 'fa fa-ravelry', name: 'StartWith', path: ['/combination/main', 'startwith'] },
      { icon: 'fa fa-rebel', name: 'Switch', path: ['/combination/main', 'switch'] },
      { icon: 'fa fa-quora', name: 'WithLatest From', path: ['/combination/main', 'withlatestfrom'] },
      { icon: 'fa fa-qq ', name: 'Zip', path: ['/combination/main', 'zip'] },
      { icon: 'fa fa-pinterest-square', name: 'ZipAll', path: ['/combination/main', 'zipall'] }
    ];

    const multiCastingChild: any = [
      { icon: 'fa fa-product-hunt', name: 'Cache', path: ['/multicasting/main', 'cache'] },
      { icon: 'fa fa-pied-piper-pp', name: 'Multicast', path: ['/multicasting/main', 'multicast'] },
      { icon: 'fa fa-pied-piper-alt', name: 'Publish', path: ['/multicasting/main', 'publish'] },
      { icon: 'fa fa-pied-piper', name: 'PublishBehavior', path: ['/multicasting/main', 'publishbehavior'] },
      { icon: 'fa fa-paypal', name: 'PublishLast', path: ['/multicasting/main', 'publishlast'] },
      { icon: 'fa fa-openid', name: 'PublishReplay', path: ['/multicasting/main', 'publishreplay'] },
      { icon: 'fa fa-opera', name: 'Share', path: ['/multicasting/main', 'share'] }
    ];

    const errorHandlingChild: any = [
      { icon: 'fa fa-optin-monster', name: 'Catch', path: ['/errorhandling/main', 'catch'] },
      { icon: 'fa fa-pagelines', name: 'Retry', path: ['/errorhandling/main', 'retry'] },
      { icon: 'fa fa-opencart ', name: 'RetryWhen', path: ['/errorhandling/main', 'retrywhen'] }
    ];

    const utilityChild: any = [
      { icon: 'fa fa-odnoklassniki', name: 'Do', path: ['/utility/main', 'do'] },
      { icon: 'fa fa-modx', name: 'Delay', path: ['/utility/main', 'delay'] },
      { icon: 'fa fa-meanpath', name: 'DelayWhen', path: ['/utility/main', 'delaywhen'] },
      { icon: 'fa fa-medium', name: 'Dematerialize', path: ['/utility/main', 'dematerialize'] },
      { icon: 'fa fa-meetup', name: 'Materialize', path: ['/utility/main', 'materialize'] },
      { icon: 'fa fa-mixcloud', name: 'ObserveOn', path: ['/utility/main', 'observeon'] },
      { icon: 'fa fa-maxcdn', name: 'SubscribeOn', path: ['/utility/main', 'subscribeon'] },
      { icon: 'fa fa-linux', name: 'TimeInterval', path: ['/utility/main', 'timeinterval'] },
      { icon: 'fa fa-linode', name: 'Timestamp', path: ['/utility/main', 'timestamp'] },
      { icon: 'fa fa-linkedin-square', name: 'Timeout', path: ['/utility/main', 'timeout'] },
      { icon: 'fa fa-lastfm-square', name: 'TimeoutWith', path: ['/utility/main', 'timeoutwith'] },
      { icon: 'fa fa-leanpub', name: 'ToArray', path: ['/utility/main', 'toarray'] },
      { icon: 'fa fa-linkedin', name: 'ToPromise', path: ['/utility/main', 'topromise'] }
    ];

    const contionalChild: any = [
      { icon: 'fa fa-jsfiddle', name: 'DefaultIfEmpty', path: ['/conditional/main', 'defaultifempty'] },
      { icon: 'fa fa-joomla', name: 'Every', path: ['/conditional/main', 'every'] },
      { icon: 'fa fa-ioxhost ', name: 'Find', path: ['/conditional/main', 'find'] },
      { icon: 'fa fa-internet-explorer', name: 'FindIndex', path: ['/conditional/main', 'findindex'] },
      { icon: 'fa fa-superpowers', name: 'IsEmpty', path: ['/conditional/main', 'isempty'] }
    ];

    const mathematicalChild: any = [
      { icon: 'fa fa-telegram', name: 'Count', path: ['/mathematical/main', 'count'] },
      { icon: 'fa fa-tencent-weibo', name: 'Max', path: ['/mathematical/main', 'max'] },
      { icon: 'fa fa-themeisle', name: 'Min', path: ['/mathematical/main', 'min'] },
      { icon: 'fa fa-stumbleupon', name: 'Reduce', path: ['/mathematical/main', 'reduce'] }
    ];

    this.menu = [
      { icon: 'fa fa-address-book', name: 'Creation', path: ['/creation/main'], child: creationChild },
      { icon: 'fa fa-address-card', name: 'Transformation', path: ['/transformation/main'], child: transfromationChild },
      { icon: 'fa fa-bandcamp', name: 'Filtering', path: ['/filtering/main'], child: filteringChild },
      { icon: 'fa fa-linode', name: 'Combination', path: ['/combination/main'], child: combinationChild },
      { icon: 'fa fa-meetup', name: 'Multicasting', path: ['/multicasting/main'], child: multiCastingChild },
      { icon: 'fa fa-microchip', name: 'Error Handling', path: ['/errorhandling/main'], child: errorHandlingChild },
      { icon: 'fa fa-podcast', name: 'Utility', path: ['/utility/main'], child: utilityChild },
      { icon: 'fa fa-ravelry', name: 'Conditional', path: ['/conditional/main'], child: contionalChild },
      { icon: 'fa fa-wpexplorer', name: 'Mathematical', path: ['/mathematical/main'], child: mathematicalChild }
    ];
  }
}


