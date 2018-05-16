<template>
	<div class="content">
		<div class="info_content">
			<ul class="info_list">
				<li>
					<div class="text_left">项目:</div>
					<div class="text_right">{{projectName}}</div>
				</li>
				<li>
					<div class="text_left">车牌号:</div>
					<div class="text_right">{{carId}}</div>
				</li>
				<li>
					<div class="text_left">缴费类型:</div>
					<div class="text_right">{{payType}}</div>
				</li>
				<li>
					<div class="text_left">停车时段</div>
					<div class="text_right">{{startTime}}</div>
					
				</li>
				<li>
					<div class="text">至</div>
				</li>
				<li>
					<div class="text">{{endTime}}</div>
				</li>
				<li>
					<div class="text_left">应缴金额</div>
					<div class="text_right">{{amout}}元</div>
					
				</li>
				<li class="picture">
					<div class="text_left">车辆图片</div>
					<div class="text_right"><img src="../../build/logo.png"/></div>
				</li>
				<li class="btn_group">
					<div class="wechat"><i-button type="primary" @click="wechat">微信缴费</i-button></div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				projectName:"中海华庭",
				carId:"粤B123456",
				payType:"临停缴费",
				startTime:"2018-05-12:12:30:26",
				endTime:"2018-05-12:16:30:26",
				amout:20,
			}
		},
		mouted(){
				
		},
		methods:{
			wechat(){
				
			},
			payfor(){
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		background: #eff2f5;
		.info_content{
			background: #fff;
			height: 10.8rem;
			margin-top:0.26rem;
			.info_list{
				padding-top: 0.19rem;
				li{
					list-style: none;
					height: 0.29rem;
					line-height: 0.29rem;
					margin-bottom: 0.33rem;
					padding: 0 0.59rem 0 0.54rem;
					div{
						width: 50%;
						float: left;
					}
					.text_left{
						text-align: left;
					}
					.text_right{
						text-align: right;
					}
					.text{
						width: 100%;
						text-align: right;
					}
					
				}
				.picture{
					width: 100%;
					height: 2.2rem;
					div{
						width: 50%;
						float: left;
					}
					.text_left{
						text-align: left;
					}
					.text_right{
						text-align: right;
					}
					img{
						width: 2.3rem;
						height: 2.2rem;
					}
				}
				.btn_group{
					margin-top: 2.81rem;
					width: 6.48rem;
					height: 0.7rem;
					.wechat{
						width: 6.48rem;
						height: 0.7rem;
						font-size: 0.36rem;
						font-weight: normal;
						button{
							width: 6.48rem;
						}
					}
				}
			}
		}
	}
</style>