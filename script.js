const { createApp, ref, reactive, onMounted, onUnmounted } = Vue

createApp({
  setup() {
    // --- Data Configuration (Modify this part!) ---
    const coupleName = '政政 ❤️ 培培'
    const startDateStr = '2021.03.19'
    const startDate = new Date('2021-03-19T00:00:00')

    const hero = { title: '情人节快乐', subtitle: '致我最爱的培培，你是我的唯一' }

    const phrases = [
      '每一天都比昨天更爱你',
      '你是我最美的遇见',
      '想和你一起慢慢变老',
      '我的世界因为你而完整',
      '在这个星球上，我最喜欢你',
    ]

    // Milestones with Images
    const timeline = reactive([
      { 
        date: '2021年3月19日',
        title: '故事的开始',
        desc: '在那个温暖的春天，我们决定牵起彼此的手，开启这段奇妙的旅程。',
        images: ['images/里程碑/IMG_20210328_130258.jpg'],
        visible: false,
        liked: false,
      },
      {
        date: '2021年5月20日',
        title: '第一个520',
        desc: '还记得那天有点害羞的我们吗？那是我们第一次一起过520。',
        images: ['images/里程碑/IMG_20210521_165807.jpg', 'images/里程碑/IMG_20210523_123631.jpg'],
        visible: false,
        liked: false,
      },
      {
        date: '2021年10月6日',
        title: '第一次和你一起划船',
        desc: '还记得那天的天气吗？我们一起划船，在水上游过了好几圈。',
        images: [
          'images/里程碑/IMG_20211006_191245.jpg',
          'images/里程碑/IMG_20211006_192525.jpg',
          'images/里程碑/IMG_20211006_193007.jpg'
        ],
        visible: false,
        liked: false,
      },
      {
        date: '2021年12月03日',
        title: '你第一次陪我过生日',
        desc: '那是我最难忘的生日，因为有你在身边，让平凡的日子变得特别。',
        images: [
          'images/里程碑/IMG_20211203_221505.jpg',
          'images/里程碑/IMG_20211203_231830.jpg',
          'images/里程碑/IMG_20211203_220513.jpg',
        ],
        visible: false,
        liked: false,
      },
      {
        date: '2021年12月19日',
        title: '第一次陪你过生日',
        desc: '还记得那天的天气吗？还有我们一起吃的可爱的蛋糕。',
        images: [
          'images/里程碑/IMG_20211219_002233.jpg',
          'images/里程碑/IMG_20211219_003004.jpg',
          'images/里程碑/IMG_20211219_001904.jpg',
        ],
        visible: false,
        liked: false,
      },
      {
        date: '2022年3月19日',
        title: '一周年纪念',
        desc: '春夏秋冬，四季轮回。感谢你陪我走过的一年四季。',
        images: [
          'images/里程碑/IMG_20220204_205053.jpg',
          'images/里程碑/IMG_20220204_205053.jpg',
        ],
        visible: false,
        liked: false,
      },
      {
        date: '2023年...',
        title: '我们第一次一起去海边',
        desc: '红树林让我们大失所望哈哈哈，但是有宝宝在就很美好。',
        images: [
          'images/里程碑/IMG_20230401_160711.jpg',
          'images/里程碑/IMG_20230401_161045.jpg',
          'images/里程碑/IMG_20230401_161658.jpg',
          'images/里程碑/IMG_20230401_165459.jpg',
        ],
        visible: false,
        liked: false,
      },
      {
        date: '现在',
        title: '未来可期',
        desc: '故事还在继续，未来还有无数个日子等着我们去探索。',
        images: ['images/里程碑/638e2fb3-8395-4450-b37a-2d5005164038.png'],
        visible: false,
        liked: false,
      },
    ])

    const features = [
      {
        icon: '✨',
        title: '温柔善良',
        desc: '你对待世界总是那么温柔，连路边的小猫都会忍不住亲近你。你的善良像一道光，照亮了我的生活。',
      },
      {
        icon: '🌟',
        title: '坚强独立',
        desc: '虽然外表看起来柔弱，但你内心却有着无比强大的力量。面对困难时，你总是那么勇敢。',
      },
      {
        icon: '💝',
        title: '可爱迷人',
        desc: '你笑起来的时候，眼睛弯弯的，像月牙一样。你偶尔的小迷糊，更是让我觉得无比可爱。',
      },
    ]

    // --- 点滴回忆照片列表 ---
    // 如果以后添加了新照片，直接把路径加到这个数组里即可
    const gallery = [
      'images/点滴回忆/IMG_16.JPG',
      'images/点滴回忆/IMG_20210523_123844.jpg',
      'images/点滴回忆/IMG_20211226_155748.jpg',
      'images/点滴回忆/IMG_20220416_104010.jpg',
      'images/点滴回忆/IMG_20220520_212000.jpg',
      'images/点滴回忆/IMG_20220520_213046.jpg',
      'images/点滴回忆/IMG_20220706_221946.jpg',
      'images/点滴回忆/IMG_20220706_221951.jpg',
      'images/点滴回忆/IMG_20221023_202025.jpg',
      'images/点滴回忆/IMG_20240809_183921.jpg',
      'images/点滴回忆/IMG_20240813_142246.jpg',
      'images/点滴回忆/IMG_20240820_152119.jpg',
      'images/点滴回忆/IMG_20250103_203616.jpg',
      'images/点滴回忆/IMG_20250202_121732.jpg',
      'images/点滴回忆/Screenshot_20210913_224157_com.tencent.mobileqq.jpg',
      'images/点滴回忆/Screenshot_20211002_231834_com.netease.sky.huawei.jpg',
      'images/点滴回忆/Videoframe_20210703_224137_com.huawei.himovie.jpg',
      'images/点滴回忆/mmexport1723125315596.jpg',
      'images/点滴回忆/mmexport1728227417378.jpg',
      'images/点滴回忆/mmexport1738592452082.jpg'
    ]

    // Album Data
    const albumPhotos = reactive([
      { id: 1, src: 'images/独家相册/IMG_20240809_183644.jpg', caption: '美丽的海边', transform: 'rotate(-2deg)', swiped: false },
      { id: 2, src: 'images/独家相册/IMG_20240809_184354.jpg', caption: '和宝宝在一起', transform: 'rotate(3deg)', swiped: false },
      { id: 3, src: 'images/独家相册/mmexport1639929438365.jpg', caption: '合拍的我们', transform: 'rotate(-4deg)', swiped: false },
      { id: 4, src: 'images/独家相册/IMG_20240813_145224.jpg', caption: '第一次和你一起漂流', transform: 'rotate(1deg)', swiped: false },
      { id: 5, src: 'images/独家相册/IMG_0448.JPG', caption: '我最得意的作品', transform: 'rotate(5deg)', swiped: false },
      { id: 6, src: 'images/独家相册/IMG_20211226_155747.jpg', caption: '第一次和你踏雪', transform: 'rotate(-3deg)', swiped: false },
    ])

    const wishlist = reactive([
      { text: '一起去看一场电影', done: false },
      { text: '一起去海边看风景', done: false },
      { text: '一起做蛋糕', done: false },
      { text: '一起做一顿丰盛的晚餐', done: false },
      { text: '一起去另一个城市旅行', done: false },
      { text: '一起爬好多座山', done: false },
      { text: '一起做好多好多事情...', done: false },
    ])

    const quiz = reactive({
      question: '政政最喜欢培培的哪个瞬间？',
      options: [
        { text: '生气的样子', correct: false, selected: false },
        { text: '每一个瞬间', correct: true, selected: false },
        { text: '吃饭的样子', correct: false, selected: false },
      ],
      answered: false,
    })

    const letter = [
      '亲爱的培培：',
      '展信佳。',
      '提笔写下这封信的时候，窗外或许是阳光明媚，或许是细雨蒙蒙，但在我心里，只要想到你，就是晴天。',
      '从2021年3月19日那个春天开始，我的世界因为有了你而变得不同。这1700多个日日夜夜里，我们一起经历欢笑，一起面对挑战，每一个瞬间都弥足珍贵。我记得第一次见你时的心动，记得第一次牵手时的紧张，也记得每一次争吵后的拥抱。',
      '有时候我在想，上天是多么眷顾我，才能让我遇到像你这样美好的女孩。你是我疲惫时的港湾，是我迷茫时的灯塔。你的笑容是我每天动力的来源。谢谢你一直以来的包容与爱，谢谢你愿意陪我一起成长，包容我的不完美。',
      '在这个快节奏的世界里，我只想和你慢慢来。慢慢地吃每一顿饭，慢慢地走每一段路，慢慢地讲每一个故事。我想和你一起，看遍世间的美景，尝遍人间的美食。我想在每一个清晨醒来时，都能看到你熟睡的脸庞；我想在每一个黄昏，都能牵着你的手散步。',
      '未来的路还很长，也许会有风雨，也许会有坎坷，但我只要握紧你的手，就什么都不怕。因为我知道，只要我们在，家就在。',
      '愿岁月静好，我们一直老去。哪怕头发花白，牙齿掉光，我也依然会像现在这样爱你，甚至更爱。',
      '情人节快乐，我的宝藏女孩。愿我们的爱情，永远如初见般美好。',
    ]

    const sweetQuotes = [
      '对于世界而言，你是一个人；但是对于我而言，你是我的整个世界。',
      '我不需要分清东南西北，我只需要走向有你的方向。',
      '原本想去环游世界，后来发现，环游你就够了。',
      '这辈子最疯狂的事，就是爱上了你，最大的希望，就是有你陪我疯一辈子。',
      '喜欢你的笑容，喜欢静静的看着你，我的忧愁像云一般一下子就飞去了。',
      '遇见你，是我一生的幸运；喜欢你，是我做过最好的事。',
      '我想和你一起，看尽世间繁华，度过平淡岁月。',
      '你的名字，是我听过最动听的情话。',
      '不是因为寂寞才想你，而是因为想你才寂寞。',
    ]



    // Coupons
    const coupons = reactive([
      { text: '无理由原谅卡', icon: '🥺', flipped: false },
      { text: '专属按摩券', icon: '💆‍♀️', flipped: false },
      { text: '奶茶畅饮券', icon: '🧋', flipped: false },
      { text: '周末赖床券', icon: '🛌', flipped: false },
      { text: '做饭免单券', icon: '🍲', flipped: false },
      { text: '亲亲抱抱券', icon: '💏', flipped: false },
    ])
    
    const flipCoupon = (index) => {
      if (!coupons[index].flipped) {
        coupons[index].flipped = true
        createHeart()
      }
    }

    // Heartbeat Scanner
    const isScanning = ref(false)
    const scanHint = ref('长按解锁心动秘密')
    const secretUnlocked = ref(false)
    let scanTimer = null
    let progress = 0
    
    const startScan = () => {
       if (secretUnlocked.value) return
       isScanning.value = true
       scanHint.value = '正在感应中...'
       progress = 0
       scanTimer = setInterval(() => {
         progress += 5
         if (progress >= 100) {
           clearInterval(scanTimer)
           isScanning.value = false
           secretUnlocked.value = true
           scanHint.value = '匹配成功！'
           for(let i=0; i<30; i++) setTimeout(createHeart, i*50)
         }
       }, 100)
    }
    
    const endScan = () => {
       if (progress < 100) {
         clearInterval(scanTimer)
         isScanning.value = false
         scanHint.value = '哎呀，手松开啦，再试一次？'
       }
    }

    // --- Logic ---
    // 优先加载项：首屏和重要内容
    const criticalImages = [
      ...albumPhotos.map(p => p.src),
      ...timeline.flatMap(item => item.images).slice(0, 4) // 前几个里程碑
    ]
    
    // 所有需要加载的图片URL（去重并排序，优先加载关键图片）
    const allImageUrls = [...new Set([
      ...criticalImages,
      ...timeline.flatMap(item => item.images),
      ...gallery,
    ])]

    // 加载状态
    const loadingProgress = ref(0)
    const loadedImagesCount = ref(0)
    const totalImagesCount = ref(allImageUrls.length)

    // 图片预加载函数
    const preloadImages = () => {
      if (allImageUrls.length === 0) {
        loadingProgress.value = 100
        return
      }

      let completedCount = 0
      const total = allImageUrls.length
      
      // 设置一个最大等待时间（例如 15 秒），防止个别大图导致一直卡在加载页
      const forceShowTimeout = setTimeout(() => {
        if (loadingProgress.value < 100) {
          console.log('Loading timeout, showing page anyway...')
          loadingProgress.value = 100
        }
      }, 15000)

      allImageUrls.forEach(url => {
        const img = new Image()
        const onImageEvent = () => {
          completedCount++
          loadedImagesCount.value = completedCount
          loadingProgress.value = Math.round((completedCount / total) * 100)
          
          if (completedCount === total) {
            clearTimeout(forceShowTimeout)
            // 额外延迟一点点，让进度条显示 100% 后平滑过渡
            setTimeout(() => {
              loadingProgress.value = 100
            }, 500)
          }
        }
        
        img.onload = onImageEvent
        img.onerror = onImageEvent // 即使加载失败也继续
        img.src = url
      })
    }

    // Album Logic
    let isSwiping = false
    const swipeCard = () => {
       if (isSwiping) return
       isSwiping = true
       
       // Top card is the last one in the array (highest z-index)
       const topIndex = albumPhotos.length - 1
       albumPhotos[topIndex].swiped = true
       
       setTimeout(() => {
           const card = albumPhotos.pop()
           card.swiped = false
           albumPhotos.unshift(card)
           isSwiping = false
       }, 500)
    }

    // Timer
    const timer = reactive({ days: 0, hours: 0, minutes: 0, seconds: 0 })
    const timerLabels = { days: '天', hours: '小时', minutes: '分钟', seconds: '秒' }

    const updateTimer = () => {
      const now = new Date()
      const diff = now - startDate
      timer.days = Math.floor(diff / (1000 * 60 * 60 * 24))
      timer.hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      timer.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      timer.seconds = Math.floor((diff % (1000 * 60)) / 1000)
    }

    // Typing Effect
    const typingText = ref('')
    let phraseIndex = 0
    let charIndex = 0
    let isDeleting = false

    const typeEffect = () => {
      const currentPhrase = phrases[phraseIndex]

      if (isDeleting) {
        typingText.value = currentPhrase.substring(0, charIndex - 1)
        charIndex--
      } else {
        typingText.value = currentPhrase.substring(0, charIndex + 1)
        charIndex++
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true
        setTimeout(typeEffect, 2000)
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false
        phraseIndex = (phraseIndex + 1) % phrases.length
        setTimeout(typeEffect, 500)
      } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100)
      }
    }

    // Floating Hearts
    const createHeart = () => {
      const heart = document.createElement('div')
      heart.classList.add('floating-heart')
      heart.innerHTML = ['❤️', '💖', '💕', '💗'][Math.floor(Math.random() * 4)]
      heart.style.left = Math.random() * 100 + 'vw'
      heart.style.fontSize = Math.random() * 20 + 10 + 'px'
      heart.style.animationDuration = Math.random() * 3 + 4 + 's'
      document.getElementById('hearts-container')?.appendChild(heart)
      setTimeout(() => heart.remove(), 7000)
    }

    // Sweet Modal
    const sweetModal = reactive({ visible: false, text: '' })
    const showSweetTalk = () => {
      sweetModal.text = sweetQuotes[Math.floor(Math.random() * sweetQuotes.length)]
      sweetModal.visible = true
      for (let i = 0; i < 10; i++) setTimeout(createHeart, i * 100)
    }
    const closeSweetTalk = () => (sweetModal.visible = false)

    // Image Modal
    const modal = reactive({ visible: false, src: '' })
    const openModal = src => {
      modal.src = src
      modal.visible = true
    }
    const closeModal = () => (modal.visible = false)

    // Wishlist
    const toggleWish = index => {
      wishlist[index].done = !wishlist[index].done
    }

    // Quiz
    const checkAnswer = index => {
      if (quiz.answered) return
      quiz.options[index].selected = true
      if (quiz.options[index].correct) {
        quiz.answered = true
        for (let i = 0; i < 20; i++) setTimeout(createHeart, i * 100)
      }
    }

    // Timeline Like
    const toggleLike = index => {
      timeline[index].liked = !timeline[index].liked
      if (timeline[index].liked) {
        createHeart()
      }
    }

    // Scroll Reveal
    const checkTimelineScroll = () => {
      const items = document.querySelectorAll('.timeline-item')
      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.85) {
          timeline[index].visible = true
        }
      })
    }


    // Sphere Logic
    const isSphereView = ref(false)
    const spherePositions = ref([])
    const sphereRotation = reactive({ x: 0, y: 0 })
    const sphereZoom = ref(1)
    
    const sphereStyle = Vue.computed(() => ({
      transform: `scale(${sphereZoom.value}) rotateX(${sphereRotation.x}deg) rotateY(${sphereRotation.y}deg)`
    }))


    const initSphereWithSrc = (radiusOverride) => {
       const sphereList = []
       const minItems = 24
       while(sphereList.length < minItems) {
           sphereList.push(...gallery)
       }
       const displayList = sphereList.slice(0, 50)
       
       const n = displayList.length
       const goldenAngle = Math.PI * (3 - Math.sqrt(5))
       const radius = radiusOverride !== undefined ? radiusOverride : 200
       
       spherePositions.value = displayList.map((src, i) => {
          const y = 1 - (i / (n - 1)) * 2
          const r = Math.sqrt(1 - y * y)
          const theta = goldenAngle * i
          
          const x = Math.cos(theta) * r * radius
          const yPos = y * radius
          const z = Math.sin(theta) * r * radius

          const rotY = Math.atan2(x, z) * (180 / Math.PI)
          const h = Math.sqrt(x * x + z * z)
          const rotX = -Math.atan2(yPos, h) * (180 / Math.PI)
          
          return {
            x,
            y: yPos,
            z,
            rotX,
            rotY,
            src: src
          }
       })
    }

    const enterSphereView = () => {
      initSphereWithSrc(0)
      isSphereView.value = true
      setTimeout(() => {
        initSphereWithSrc(200)
      }, 100)
    }
    
    // Interaction
    let isDragging = false
    let lastMouseX = 0
    let lastMouseY = 0
    let isPinching = false
    let lastPinchDist = 0
    const isDraggingSphere = ref(false)

    const getPinchDist = (touches) => {
      const dx = touches[0].clientX - touches[1].clientX
      const dy = touches[0].clientY - touches[1].clientY
      return Math.sqrt(dx * dx + dy * dy)
    }

    const startDrag = (e) => {
      e.preventDefault()

      // 双指捏合缩放
      if (e.touches && e.touches.length >= 2) {
        isPinching = true
        isDragging = false
        lastPinchDist = getPinchDist(e.touches)
        window.addEventListener('touchmove', onPinch, { passive: false })
        window.addEventListener('touchend', stopPinch)
        return
      }

      isDragging = true
      isDraggingSphere.value = true
      const clientX = e.touches ? e.touches[0].clientX : e.clientX
      const clientY = e.touches ? e.touches[0].clientY : e.clientY
      lastMouseX = clientX
      lastMouseY = clientY

      window.addEventListener('mousemove', onDrag)
      window.addEventListener('mouseup', stopDrag)
      window.addEventListener('touchmove', onDrag, { passive: false })
      window.addEventListener('touchend', stopDrag)
    }

    const onPinch = (e) => {
      if (!isPinching) return
      e.preventDefault()
      if (e.touches.length < 2) return
      const dist = getPinchDist(e.touches)
      const delta = dist - lastPinchDist
      sphereZoom.value += delta * 0.005
      sphereZoom.value = Math.min(Math.max(0.5, sphereZoom.value), 3)
      lastPinchDist = dist
    }

    const stopPinch = () => {
      isPinching = false
      window.removeEventListener('touchmove', onPinch)
      window.removeEventListener('touchend', stopPinch)
    }
    
    const onDrag = (e) => {
      if (!isDragging) return
      e.preventDefault()
      if (e.touches && e.touches.length >= 2) return
      const clientX = e.touches ? e.touches[0].clientX : e.clientX
      const clientY = e.touches ? e.touches[0].clientY : e.clientY
      
      const deltaX = clientX - lastMouseX
      const deltaY = clientY - lastMouseY
      
      const absX = Math.abs(deltaX)
      const absY = Math.abs(deltaY)
      
      if (absX > absY) {
        sphereRotation.y += deltaX * 0.5
      } else {
        sphereRotation.x -= deltaY * 0.5
      }
      
      lastMouseX = clientX
      lastMouseY = clientY
    }
    
    const stopDrag = () => {
      isDragging = false
      isDraggingSphere.value = false
      window.removeEventListener('mousemove', onDrag)
      window.removeEventListener('mouseup', stopDrag)
      window.removeEventListener('touchmove', onDrag)
      window.removeEventListener('touchend', stopDrag)
    }
    
    const handleZoom = (e) => {
       sphereZoom.value += e.deltaY * -0.001
       sphereZoom.value = Math.min(Math.max(0.5, sphereZoom.value), 3)
    }

    onMounted(() => {
      secretUnlocked.value = false
      setInterval(updateTimer, 1000)
      updateTimer()
      setTimeout(typeEffect, 1000)
      setInterval(createHeart, 800)
      window.addEventListener('scroll', checkTimelineScroll)
      checkTimelineScroll() // Initial check
      
      // 图片加载检测
      preloadImages()
      
      // 预初始化球体，防止点击时闪烁或加载失败
      initSphereWithSrc(200)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', checkTimelineScroll)
    })

    return {
      albumPhotos,
      swipeCard,
      coupons,
      flipCoupon,
      isScanning,
      scanHint,
      startScan,
      endScan,
      secretUnlocked,
      coupleName,
      startDateStr,
      hero,
      typingText,
      timer,
      timerLabels,
      timeline,
      features,
      gallery,
      wishlist,
      quiz,
      letter,
      modal,
      sweetModal,
      showSweetTalk,
      closeSweetTalk,
      openModal,
      closeModal,
      toggleWish,
      checkAnswer,
      toggleLike,
      isSphereView,
      spherePositions,
      sphereStyle,
      enterSphereView,
      startDrag,
      handleZoom,
      isDraggingSphere,
      loadingProgress,
      loadedImagesCount,
      totalImagesCount,
    }
  },
}).mount('#app')
