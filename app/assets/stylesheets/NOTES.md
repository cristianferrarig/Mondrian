@mixin layout($options) {
  @include debug-map($options);
  content: "layout";
}

@mixin view($options) {
  @include debug-map($options);

  $name:          map-get($options,name);
  $layout:        map-get($options,layout);
  $regions_opts:  map-get($options,regions);
  $regions:       map-keys($regions_opts);

  @include debug-map($regions_opts);

  $index:             null;
  $flexible:          null;
  $regions_selectors: null;

  @each $region in $regions {
    $regions_selectors: append($regions_selectors, unquote('&-#{$region}'), comma);

    @if not $flexible {
      $flexible:  map-deep-get($regions_opts, $region, flexible);
      $index:     index($regions, $region);

      .class {
        content: "#{$index} - #{$flexible}";
      }
    }


  }



  .#{$name} {

    &, #{$regions_selectors} {
      position: absolute;
    }

    @each $region in $regions {
      $regions_selectors: append($regions_selectors, unquote('&-#{$region}'), comma);

      &-#{$region} {

      }
    }

  }

}














@mixin layout($options)
  @include debug-map($options)
  content: "layout"


@mixin view($options)
  @include debug-map($options)

  $module:  map-get($options,name)
  $layout:  map-get($options,layout)
  $regions: map-get($options,regions)

  .#{$module}
    content: "#{$module}"

    @each $region in map-keys($regions)

      $height:     map-deep-get($regions, $region, height)
      $scrollable: map-deep-get($regions, $region, scrollable)
      $flexible:   map-deep-get($regions, $region, flexible)

      &-#{$region}
        content: "#{$region}"

        @if ($layout == vertical) && ($flexible != true)
          height: $height
          content: "height"
          content: "#{$flexible}"

//
// [1]
// [2]
// [3] flex
// [4]
//
//
// TOP
//
////  0
//// [1]
//
////  0
//// [2]
//
//  1
// [2]
//
////  0
//// [3]
//
//  1
// [3]
//
//  2
// [3]
//
//  1
//  2
// [3]
//
////  a
//// [4]
//
// BOTTOM
//
//// [1]
////  a
//
//// [2]
////  a
//
//// [3]
////  0
//
// [3]
//  4
//
//// [4]
////  0
//
