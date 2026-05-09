  mapboxgl.accessToken = 'pk.eyJ1IjoieWFtc2Fzc29uIiwiYSI6ImNtZTQ0OXMyeTA4ZDkyaXF3cTdkY2QyeWcifQ.mKj4gd7YawpMKZ987UFi8w';
    const map = new mapboxgl.Map({
        container: 'map',
        /*style: 'mapbox://styles/mapbox/outdoors-v12',*/
        style: 'mapbox://styles/yamsasson/cmh5dv2gw004201qwf6o074i5',
        zoom: 6,
        center: [31.2, 30.0],
        projection: 'mercator', 
    
    // 2. منع المستخدم من إمالة الخريطة (المنظور الثلاثي الأبعاد)
    pitchWithRotate: false,
    dragPitch: false,
    maxPitch: 0, // تثبيت الزاوية على صفر
    
    // 3. (اختياري) منع دوران الخريطة لتبقى دائماً جهة الشمال للأعلى
    touchZoomRotate: false,
    preserveDrawingBuffer: true, // ضروري جداً للسماح بالتقاط الصورة
    renderWorldCopies: false, // هذا يمنع تكرار العالم أفقياً
    });

    map.on('style.load', () => {
       const layers = map.getStyle().layers;
    
       layers.forEach((layer) => {
       console.log(layer.type);
      
       
           // قائمة بأسماء الطبقات الأساسية التي نريد الإبقاء عليها (الأرض والمياه)
        const baseLayerIds = ['background', 'land', 'water', 'sky', 'landuse', 'hillshade', 'natural', 'fill'];
        
        // إذا لم تكن الطبقة من الأساسيات، قم بإخفائها
        if (!baseLayerIds.includes(layer.id) && !baseLayerIds.includes(layer.type)) {
            map.setLayoutProperty(layer.id, 'visibility', 'none');
        }
        
        
  
        
    });
    
    /*
    map.addLayer({
        'id': 'dim-layer',
        'type': 'background',
        'paint': {
            'background-color': '#000000',
            'background-opacity': 0.6 
        }
    });
    */
    //map.setPaintProperty('land', 'background-color', '#f4f4f4');
    map.setFog(null); // هذا الأمر يلغي الضباب والغلاف الجوي تماماً

    
    
    
    });

    // The following values can be changed to control rotation speed:

    // At low zooms, complete a revolution every two minutes.
    const secondsPerRevolution = 10;
    // Above zoom level 5, do not rotate.
    const maxSpinZoom = 5;
    // Rotate at intermediate speeds between zoom levels 3 and 5.
    const slowSpinZoom = 3;

    let userInteracting = false;
    let spinEnabled = true;

    function spinGlobe() {
        const zoom = map.getZoom();
        if (spinEnabled && !userInteracting && zoom < maxSpinZoom) { 
            let distancePerSecond = 360 / secondsPerRevolution;
            if (zoom > slowSpinZoom) {
                // Slow spinning at higher zooms
                const zoomDif =
                    (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
                distancePerSecond *= zoomDif;
            }
            const center = map.getCenter();
            center.lng -= distancePerSecond;
            // Smoothly animate the map over one second.
            // When this animation is complete, it calls a 'moveend' event.
            map.easeTo({ center, duration: 1000, easing: (n) => n });
        }
    }

    // Pause spinning on interaction
    map.on('mousedown', () => {
        userInteracting = true;
    });

    // Restart spinning the globe when interaction is complete
    map.on('mouseup', () => {
        userInteracting = false;
        
    });

    // These events account for cases where the mouse has moved
    // off the map, so 'mouseup' will not be fired.
    map.on('dragend', () => {
        userInteracting = false;
        
    });
    map.on('pitchend', () => {
        userInteracting = false;
        
    });
    map.on('rotateend', () => {
        userInteracting = false;
        
    });

    // When animation is complete, start spinning if there is no ongoing interaction
    map.on('moveend', () => {

    });

    document.getElementById('btn-spin').addEventListener('click', (e) => {
        spinEnabled = !spinEnabled;
        if (spinEnabled) {
            
            e.target.innerHTML = 'Pause rotation';
        } else {
            map.stop(); // Immediately end ongoing animation
            e.target.innerHTML = 'Start rotation';
        }
    });

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    function exportMapAsPNG() {
    // الحصول على رابط الصورة من عنصر "canvas" الخاص بالخريطة
    const imgURL = map.getCanvas().toDataURL("image/png");
    
    // إنشاء رابط وهمي لتحميل الصورة تلقائياً
    const link = document.createElement('a');
    link.href = imgURL;
    link.download = 'mapbox-map.png'; // اسم الملف عند التحميل
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


function exportHugeMap() {
    const container = map.getContainer();
    const originalWidth = container.style.width;
    const originalHeight = container.style.height;

    // تكبير الحاوية لأبعاد ضخمة (داخلياً)
    container.style.width = '7000px';
    container.style.height = '7000px';
    map.resize();

    // ننتظر قليلاً حتى تنتهي الخريطة من رندر التفاصيل الجديدة
    setTimeout(() => {
        const imgURL = map.getCanvas().toDataURL("image/png");
        const link = document.createElement('a');
        link.href = imgURL;
        link.download = 'huge-map.png';
        link.click();

        // إعادة الخريطة لحجمها الأصلي
        container.style.width = originalWidth;
        container.style.height = originalHeight;
        map.resize();
    }, 40000); 
}
