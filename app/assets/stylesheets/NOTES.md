$default: (
  name: "custom value",
  layout: (
    required: true,
  ),
  fixed: (
    required: true,
    need: orientation,
  ),
  flex: (
    required: true,
    need: orientation,
  ),
  off-canvas: (
    required: true,
    need: orientation,
  ),
  stacked: (
    required: true,
    need: orientation,
  ),
);

// $definition_has_name:    map-has-key($definition, name);
  // $definition_has_layout:  map-has-key($definition, layout);
  // $definition_has_regions: map-has-key($definition, regions);

  /*
  @each $option, $values in $definition {
    $definition_option:       map-get($definition, $option);

    @include debug($definition_option,"LALALA");
    @include debug($option,"OPTION");
    @include debug($values,"VALUES");

    $mondrian_has_option:      map-has-key($mondrian-options, $option);
    $mondrian_require_option: map-deep-get($mondrian-options, $option, required);
    $mondrian_posible_value:  map-deep-get($mondrian-options, $option, value);

    //@error "r#{$mondrian_require_option}";

    @if $mondrian_has_option && $mondrian_require_option($option) {
    //    $errors: join($errors, "The option `#{$option}` is required");

    //   //  $errors: join($errors, "You neeed the option: `#{$option}`");
    //   //}
    }
  }
  */
  /*
  @if not $definition_has_layout {
    $errors: join($errors, "No puede faltar :layout");
  }
  @else {
    @if (map-get($definition, layout) != flex) {
      $errors: join($errors, ":layout debe ser :flex");
    }
  }

  @if not (map-has-key($definition, regions)) {
    $errors: join($errors, "No puede faltar :regions");
  }
  */





  $options: map-get($mondrian, options);

  @each $option in $options {

    @include debug($option, "Options");
  }




@mixin layout($definition) {

  @include debug($definition);

  $name: map-get($definition, layout);

  @if      ($name == flex)       { @include       flex-layout($definition); }
  @else if ($name == fixed)      { @include      fixed-layout($definition); }
  @else if ($name == off-canvas) { @include off-canvas-layout($definition); }
  @else if ($name == stacked)    { @include    stacked-layout($definition); }
  @else    { @warn "This layout type does not exist." }

}

@mixin validate-layout($definition) {

  @include debug($definition);

  $name: map-get($definition, layout);

  @if      ($name == flex)       { @include       flex-validation($definition); }
  @else if ($name == fixed)      { @include      fixed-validation($definition); }
  @else if ($name == off-canvas) { @include off-canvas-validation($definition); }
  @else if ($name == stacked)    { @include    stacked-validation($definition); }
  @else    { @warn "This layout type does not exist." }

}

















//@include debug("Region No: #{$region_number}");
      //@include debug($this_region);
      // @if not ($is_flexible) {
      //   $pre-flex-regions: map-merge($pre-flex-regions, map-deep-get($regions, $region_number));
      // }
      // @if $is_flexible {
      //   @include debug("Flexible region: #{$flex-region}");
      // }



      @for $i from 1 through length($regions) {

      @if (index($regions,$region) > $flex_region_number) {
        $pre_flex_region_map: map-merge($pre_flex_region_map, $region);
        @include debug("Pre");
      }
      @else {
        $post_flex_region_map: map-merge($post_flex_region_map, $region);
        @include debug("Post");
      }
    }

















@function sets($input, $size) {
  $results: ();
  $result:  null;
  $mask:    null;
  $total:   pow(2, lenght($input));

  @for ($mask = 0; $mask < $total; $mask++) {
    $result:  ();
    $i = lenght($input) - 1;
  }
}




var sets = (function(input, size){
    var results = [],
    result,
    mask,
    total = Math.pow(2, input.length);

    for(mask = 0; mask < total; mask++){
        result = [];
        i = input.length - 1;
        do{
            if( (mask & (1 << i)) !== 0){
                result.push(input[i]);
            }
        }while(i--);
        if( result.length >= size){
            results.push(result);
        }
    }

    return results;
})(['a','b','c','d','e','f'], 2);
console.log(sets);


@function funct($n, $src, $got, $all) {
  @if (n == 0) {
    @if (length($got) > 0) {
      all[all.length] = got;
    }
    @return;
  }
}

@function combine($input, $min) {

}



var combine = function(a, min) {
  var funct = function(n, src, got, all) {
    if (n == 0) {
      if (got.length > 0) {
        all[all.length] = got;
      }
      return;
    }
    for (var j = 0; j < src.length; j++) {
      funct(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
    }
    return;
  }

  var all = [];
  for (var i = min; i < a.length; i++) {
    funct(i, a, [], all);
  }
  all.push(a);
  return all;
}

















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


















// Base positions
%fixed-view   { @extend %stretch; }
%fixed-top    { @extend %stretch; bottom: auto; }
%fixed-left   { @extend %stretch; right:  auto; }
%fixed-bottom { @extend %stretch; top:    auto; }
%fixed-right  { @extend %stretch; left:   auto; }

// Contiene el numero de la region flexible

$flex_region_distribution: (
  pre: (),
  post: (),
);

@mixin set-positions-of($regions) {
  $flex_region_number:   length($regions) !global;
  $pre_flex_region_map:  () !global;
  $post_flex_region_map: () !global;

  @each $region_number, $region_values in $regions {
    // Obtener la posición de contenedor flexible
    $is_flexible: if(map-get($region_values, flexible), true, false);

    // Preparar region para ser agrupada
    $region_to_merge: (
      #{$region_number}: map-deep-get($regions, $region_number),
    );

    // Setea el numero del contenedor flexible
    @if ($is_flexible) {
      $flex_region_number: $region_number;
    }
    // Asignar a cada region a su respectivo grupo
    @else {
      @if ($region_number < $flex_region_number) {
        $pre_flex_region_map: map-merge($pre_flex_region_map, $region_to_merge);
      }
      @else if ($region_number > $flex_region_number) {
        $post_flex_region_map: map-merge($post_flex_region_map, $region_to_merge);
      }
    }
  }

  .CSSC {
    background-color: red;
  }
  // @include debug($pre_flex_region_map);
  // @include debug($post_flex_region_map);

};

// Layout Structure
@mixin fixed-vertical-layout($module-config) {

  $module-name: map-get($module-config, name);
  $regions:     map-get($module-config, regions);

  @include set-positions-of($regions);


    // @include debug("Flex: #{$flex_region_number}");

    // @for $i from 1 through $pre-flex-region-count {
    // }

    // Obtener todos los elementos que estan antes del contenedor flexible
    // $pre-flex-regions: sl-slice($regions,1,$flex-region);
    // @include debug($pre-flex-regions);


  // Temporal variables
  $header-size: map-deep-get($regions, 1, size);
  $nav-size:    map-deep-get($regions, 2, size);
  $footer-size: map-deep-get($regions, 4, size);

  // Module definition
  .#{$module-name} {

    $combinations: combine($regions);
    //@include debug($combinations);

    &        { @extend %fixed-view; }
    &-body   { @extend %fixed-view; }
    &-header { @extend %fixed-top;  }
    &-nav    { @extend %fixed-top; }
    &-footer { @extend %fixed-bottom; }

    &-header { height: $header-size; }
    &-nav    { height: $nav-size; }
    &-footer { height: $footer-size; }

    &-header         ~ &-nav  { top:    $header-size; }
    &-header         ~ &-body { top:    $header-size; }
    &-nav            ~ &-body { top:    $nav-size; }
    &-footer         ~ &-body { bottom: $footer-size; }
    &-header + &-nav ~ &-body { top:    $header-size + $nav-size; }
  }

  // Only for debug
  $background: #000;

  .#{$module-name} {
    &-header { background-color: lighten($background,12%); }
    &-nav    { background-color: lighten($background,10%); }
    &-body   { background-color: lighten($background, 5%); }
    &-footer { background-color: lighten($background,10%); }
  }

};


// Layout Structure
@mixin fixed-horizontal-layout($module-config) {

  $module-name: map-deep-get($module-config, name);
  $regions:     map-get($module-config, regions);

  // Temporal variables
  $menu-size:   map-deep-get($regions, 1, size);
  $nav-size:    map-deep-get($regions, 2, size);
  $aside-size:  map-deep-get($regions, 4, size);

  // Module definition
  .#{$module-name} {
    &       { @extend %fixed-view; }
    &-body  { @extend %fixed-view; }

    &-menu  { @extend %fixed-left; }
    &-nav   { @extend %fixed-left; }
    &-aside { @extend %fixed-right; }

    &-menu  { width: $menu-size; }
    &-nav   { width: $nav-size; }
    &-aside { width: $aside-size; }

    &-menu         ~ &-nav  { left:  $menu-size; }
    &-menu         ~ &-body { left:  $menu-size; }
    &-nav          ~ &-body { left:  $nav-size; }
    &-aside        ~ &-body { right: $aside-size; }
    &-menu + &-nav ~ &-body { left:  $menu-size + $nav-size; }
  }

  // Only for debug
  $background: #000;

  .#{$module-name} {
    &-menu  { background-color: lighten($background,12%); }
    &-nav   { background-color: lighten($background,10%); }
    &-body  { background-color: lighten($background,5%); }
    &-aside { background-color: lighten($background,10%); }
  }

};













@mixin view($options) {
  @include debug($options);

  $module:        map-get($options,name);
  $layout:        map-get($options,layout);
  $regions:       map-get($options,regions);
  $regions_names: map-keys($regions);

  .#{$module} {
    content: "#{$module}";

    @each $region in $regions_names {

      $height:     map-deep-get($regions, $region, height);
      $scrollable: map-deep-get($regions, $region, scrollable);
      $flexible:   map-deep-get($regions, $region, flexible);

      &-#{$region} {
        content: "#{$region}";

        @if ($layout == vertical) && ($flexible != true) {
          height: $height;
        }

      }

    }
  }

}
