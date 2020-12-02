# Sorting rational numbers in Datatables

Since I've found no plugin for sorting rational numbers in Datatables.js on https://datatables.net/plug-ins/sorting/, I've implemented my own. Rational numbers have to be represented in "numerator/denominator" format. 

To use the plugin, include the .js file in the page and add the following definition (replace target column indexes with yours):
```javascript
$('#dt').DataTable({  
  columnDefs: [  
        { targets: [0], orderDataType: 'dom-text', type: 'rational' }  
    ]  
});
```