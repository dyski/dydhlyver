---
title: "timeline"
description: timeline markdown
date: 2022-10-23T11:11:13Z
blogimage: ""
label: "develop"
layout: blank
authors: ["Raymond"]
audio: []
images: ['/img/bbc800x400.jpg']
series: []
tags: []
videos: []
draft: false
---
{{< pagetitle >}}
{{< section class="inset mt-3 mb-2" title="Basic" header="wola wola bingbong" footer="well this is nice">}}

{{< history class="timed">}}
        
        {{< history_point 
        time="1975"
        img="/img/numbers/two.jpg" 
        class="bg-warning"
        title="test title"
        >}}

        He was only born once, right there, right then. So that makes it a preterite tense.
        {{< /history_point >}}

{{< /history >}}


{{< /section >}}

{{< section class="full mt-3 mb-2" title="No Time" header="small header">}}

{{< history class="">}}
        
        {{< history_point 
        time=""
        img="/img/numbers/one.jpg" 
        class="bg-warning"
        title="test title"
        >}}

        He was only born once, right there, right then. So that makes it a preterite tense.
        {{< /history_point >}}


{{< history_point 
        time=""
        class="bg-warning"
        title="test title"
        >}}
        {{< /history_point >}}

{{< history_point 
        time=""
        img="/img/numbers/two.jpg" 
        class=""
        title=""
        >}}

        He was only born once, right there, right then. So that makes it a preterite tense.
        {{< /history_point >}}

{{< /history >}}


{{< /section >}}

{{< section class="message-divider" >}}
Friday, Sep 20, 10:40 AM
{{< /section >}}

{{< chat 
        
        img="/img/numbers/one.jpg"
        icon="/img/numbers/two.jpg"  
        name="Steve" 
        time="10:40AM"
        text="pyth yw hemma?"

 >}}

 {{< chat 
        
        icon="/img/numbers/one.jpg"  
        name="Raymond" 
        time="10:45AM"
        text="ny wonn, pyth yw henna?"

 >}}


 {{< chat 
        class="user"
        time="10:50AM"
        text="aval yw"

 >}}

 {{< story_slider >}}
    {{< story_slider_li
        img="/img/numbers/one.jpg" 
        target="Storytest" 
        delay="5000"
        class=""
    >}}
    {{< story_slider_li
        img="/img/numbers/two.jpg" 
        target="Storytest2" 
        delay="5000"
        class="seen"
    >}}
    {{< story_slider_li
        img="/img/numbers/one.jpg" 
        target="Storytest3" 
        delay="5000"
        class="passive"
    >}}

{{< /story_slider >}}

{{< section class="mt-3 mb-3" >}}
ok and this is my story of a man who lived in Cornwall. Helived in a small town called St Ives. His name i do not recall. however it was resized as wjpb. but it wasnt supported by iphone so i rolled back to jpg, but now supports video x hopefully
{{< /section >}}


{{< story_popup
        img="/img/numbers/one.jpg"
        video="/img/sample/test.mp4"
        icon="/img/numbers/two.jpg"  
        target="Storytest" 
        author="Raymondo" 
        time="on my half birthday"
        title="demo title 44"  
        text="use unn before nouns, eg 'onan rag oll'"
        button="click me"
        fixbtn="fixed btn"
    >}}
  {{< story_popup
        img="/img/numbers/one.jpg"
        
        icon="/img/numbers/one.jpg"  
        target="Storytest2"     
        author="Raymondp" 
        time="on my half birthday"
        title="demo title gygy"  
        text="use unn before nouns, eg 'onan rag oll'"
        button="click me"
        fixbtn="fixed btn"
    >}}
     {{< story_popup
        img="/img/numbers/two.jpg"
        video="/img/sample/test.mp4"
        icon="/img/numbers/two.jpg"  
        target="Storytest3"        
        author="Raymondhh" 
        time="on my half birthday"
        title="demo title ygyg"  
        text="use unn before nouns, eg 'onan rag oll'"
        button="click me"
        fixbtn="fixed btn"
    >}}