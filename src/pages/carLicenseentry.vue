<template>
	<div class="header">
		<div class="content">
			<div class="waringInfo">
				请输入你要缴费的车牌号码
			</div>
			<div class="car_id">
				<input type="text" />
				<div class="carInfo"><span>*</span><span>无车牌信息</span></div>
			</div>
			<div class="select">
				请选择缴费类型
			</div>
			<div class="btn_group" >
				<button :class="{on:index == guigeSpan}" @click="selectType(index)" v-for="(item,index) in typeName">{{item.name}}</button>
			</div>
			<div class="sure">
				<i-button type="primary" @click="payfor">确认</i-button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				typeName:[
					{name:'月卡缴费'},
					{name:'临停缴费'},
					{name:'代客缴费'}
				],
				guigeSpan:null,
			}
		},
		mounted() {

		},
		methods: {
			selectType(val){
				this.guigeSpan = val;
			},
			payfor() {
				this.$router.push({ path: '/payInfo'});
			},
		}
	}
</script>
<style lang="scss" scoped>
	.header {
		background: #eff2f5;
		.content {
			background: #fff;
			height: 10.8rem;
			padding-top: 0.88rem;
			margin-top:0.26rem;
			.waringInfo{
				text-align: center;
				font-size: 0.36rem;
			}
			.car_id{
				text-align: center;
				margin-top: 0.45rem;
				position: relative;
				input{
					border: none;
					outline: none;
					height: 0.94rem;
					width: 5.51rem;
					background-color: #eff2f5;
					border-radius: 15px;
					text-align: center;
				}
				.carInfo{
					margin: 0 auto;
					color: red;
					width: 5.51rem;
					font-size: 0.24rem;
					text-align: left;
					span{
						color: red;
					}
				}
			}
			.select{
				margin-top:1.46rem;
				height: 0.34rem;
				text-align: center;
				font-size: 0.36rem;
			}
			.btn_group{
				width: 6.75rem;
				height: 0.54rem;
				margin: 0 auto;
				margin-top: 0.67rem;
				button{
					box-sizing: border-box;
					width: 1.5rem;
					height: 0.54rem;
					border-radius: 0.12rem;
					border: solid 0.02rem #5698ff;
					color: #5698ff;
					background: transparent;
					cursor: pointer;
					outline: none;
				}
				button:nth-of-type(2){
					margin-left: 1.02rem;
					margin-right: 1.02rem;
				}
				.on{
					background-color: #5698ff;
					color: #fff;
				}
			}
			.sure{
				width: 6.48rem;
				height: 0.7rem;
				margin: 0 auto;
				button{
					margin-top: 3.78rem;
					width: 6.48rem;
					height: 0.7rem;
				}
			}
		}
	}
</style>