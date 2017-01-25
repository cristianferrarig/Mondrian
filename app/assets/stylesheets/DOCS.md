# OPTIONS

- layouts:        [ flex, fixed, stacked, off-canvas ]
  - orientation:  [ vertical, columns, horizontal, rows ]


- animations:   [  ]
- behaviors:    [ reveal, push, appear ]
- breakpoints:  [ phone, tablet, laptop, desktop, cinema ]
- attributes:   [ scrollable, flexible ]
- off-canvas:   [ position, animation, target ]
- layer:        [ dialog, backdrop, front, next, current, back ]

// $browser-support: cross | modern;

*******************************


# APP LAYOUT

## SCSS:
  $app: (
    name: app,
    regions: (
      menu: (),
      main: (
        regions: (
          header: (),
          sections: (),
        ),
      ),
    ),
  );

## USAGE:
  @include layout($app);

## HAML:
  .app
    .app-menu
    .app-main
      .app-header
      .app-sections


*******************************


# SECTION VIEW

## SCSS:
  $section: (
    name: section,
    regions: (
      aside: (
        wrapper: inner,
      ),
      content: (
        wrapper: inner,
      ),
    ),
  );

## USAGE:
  @include view($section);

## HAML:
  .section
    .section-aside
      .section-inner

    .section-content
      .section-inner


*******************************


# PANEL VIEW

## SCSS:
  $panel: (
    name: panel,
    regions: (
      header: (),
      nav: (),
      body: (),
      footer: (),
    ),
  );

## USAGE:
  @include view($panel);

## HAML:
  .panel
    .panel-header
    .panel-nav
    .panel-body
    .panel-footer


*******************************


# PAGE VIEW

## SCSS:
  $page: (
    name: page,
    regions: (
      header: (
        wrapper: content,
      ),
      body: (
        wrapper: content,
      ),
    ),
  );

## USAGE:
  @include view($page);

## HAML:
  .page
    .page-header
      .page-content

    .page-body
      .page-content
