export default {
  form: `
{% if (!label.hidden && label.labelPosition !== 'bottom') { %}
  <label class="col-form-label {{label.className}}">
    {{ t(component.label) }}
    {% if (component.tooltip) { %} 
      <i ref="tooltip" class="{{iconClass('question-sign')}} text-muted" data-title="{{component.tooltip}}"></i>
    {% } %}
  </label>
{% } %}
{{element}}
{% if (!label.hidden && label.labelPosition === 'bottom') { %}
  <label class="{{label.className}}">{{t(component.label)}}
  {% if (component.tooltip) { %}
    <i class="{{iconClass('question-sign')}} text-muted"></i>
  {% } %}
  </label>
{% } %}
{% if (component.description) { %}
  <div class="form-text text-muted">{{t(component.description)}}</div>
{% } %}
`,
};
