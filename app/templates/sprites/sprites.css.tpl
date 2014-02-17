{{#sprites}}
.ico-{{name}} {
    background: url('{{../baseUrl}}{{../fileName}}') no-repeat -{{x}}px -{{y}}px;
    display: inline-block;
    height: {{height}}px;
    width: {{width}}px;
    vertical-align: middle;
}
{{/sprites}}