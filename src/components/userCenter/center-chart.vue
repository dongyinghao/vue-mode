<template>
  <div class="c-security">
    <h3>{{ $t('条形图') }}</h3>
    <dEchart :data="data[currentIndex]"></dEchart>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentIndex: 0,
      data: [
        [
          {
            name: '中国',
            gdp: 7,
            bg: '#1F9A99'
          },
          {
            name: '美国',
            gdp: 96,
            bg: '#9A9839'
          },
          {
            name: '日本',
            gdp: 85,
            bg: '#9a270f'
          },
          {
            name: '英国',
            gdp: 78,
            bg: '#50409a'
          },
          {
            name: '俄罗斯',
            gdp: 65,
            bg: '#2b9a0a'
          },
          {
            name: '缅甸',
            gdp: 15,
            bg: '#e66491'
          },
          {
            name: '新加坡',
            gdp: 39,
            bg: '#8d869a'
          },
          {
            name: '印度',
            gdp: 10,
            bg: '#070b9a'
          }
        ],
        [
          {
            name: '中国',
            gdp: 12,
            bg: '#1F9A99'
          },
          {
            name: '美国',
            gdp: 80,
            bg: '#9A9839'
          },
          {
            name: '日本',
            gdp: 85,
            bg: '#9a270f'
          },
          {
            name: '英国',
            gdp: 78,
            bg: '#50409a'
          },
          {
            name: '俄罗斯',
            gdp: 65,
            bg: '#2b9a0a'
          },
          {
            name: '缅甸',
            gdp: 15,
            bg: '#e66491'
          },
          {
            name: '新加坡',
            gdp: 39,
            bg: '#8d869a'
          },
          {
            name: '印度',
            gdp: 9,
            bg: '#070b9a'
          }
        ],
        [
          {
            name: '中国',
            gdp: 22,
            bg: '#1F9A99'
          },
          {
            name: '美国',
            gdp: 89,
            bg: '#9A9839'
          },
          {
            name: '日本',
            gdp: 80,
            bg: '#9a270f'
          },
          {
            name: '英国',
            gdp: 71,
            bg: '#50409a'
          },
          {
            name: '俄罗斯',
            gdp: 74,
            bg: '#2b9a0a'
          },
          {
            name: '缅甸',
            gdp: 11,
            bg: '#e66491'
          },
          {
            name: '新加坡',
            gdp: 42,
            bg: '#8d869a'
          },
          {
            name: '印度',
            gdp: 16,
            bg: '#070b9a'
          }
        ],
        [
          {
            name: '中国',
            gdp: 42,
            bg: '#1F9A99'
          },
          {
            name: '美国',
            gdp: 96,
            bg: '#9A9839'
          },
          {
            name: '日本',
            gdp: 86,
            bg: '#9a270f'
          },
          {
            name: '英国',
            gdp: 89,
            bg: '#50409a'
          },
          {
            name: '俄罗斯',
            gdp: 70,
            bg: '#2b9a0a'
          },
          {
            name: '缅甸',
            gdp: 16,
            bg: '#e66491'
          },
          {
            name: '新加坡',
            gdp: 38,
            bg: '#8d869a'
          },
          {
            name: '印度',
            gdp: 7,
            bg: '#070b9a'
          }
        ],
        [
          {
            name: '中国',
            gdp: 72,
            bg: '#1F9A99'
          },
          {
            name: '美国',
            gdp: 90,
            bg: '#9A9839'
          },
          {
            name: '日本',
            gdp: 70,
            bg: '#9a270f'
          },
          {
            name: '英国',
            gdp: 82,
            bg: '#50409a'
          },
          {
            name: '俄罗斯',
            gdp: 76,
            bg: '#2b9a0a'
          },
          {
            name: '缅甸',
            gdp: 36,
            bg: '#e66491'
          },
          {
            name: '新加坡',
            gdp: 31,
            bg: '#8d869a'
          },
          {
            name: '印度',
            gdp: 46,
            bg: '#070b9a'
          }
        ]
      ]
    }
  },
  mounted () {
    setInterval(() => {
      if (this.currentIndex === this.data.length - 1) {
        this.currentIndex = 0
      }
      this.currentIndex += 1
    }, 2000)
  }
}
</script>

<style scoped lang="scss">
  h3 {
    background-color: #f1f1f1;
    padding-bottom: 16px;
  }
</style>
