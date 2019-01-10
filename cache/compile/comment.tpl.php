<?php /* Smarty version 2.6.25, created on 2019-01-09 15:06:34
         compiled from comment.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('function', 'formaturl', 'comment.tpl', 38, false),)), $this); ?>
<?php $this->assign('seotitle', "在线留言"); ?>
<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "header.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
<div class="crumb">
	<div class="container">
		<ol class="breadcrumb row">
			<li class="active">当前位置: </li>
			<?php $_from = $this->_tpl_vars['crumb']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['cat']):
?>
			<li><a href="<?php echo $this->_tpl_vars['cat']->url; ?>
"><?php echo $this->_tpl_vars['cat']->name; ?>
</a></li>
			<?php endforeach; endif; unset($_from); ?>
			<li class="active">在线留言</li>
		</ol>
	</div>
</div>
<div class="container main-content">
	<div class="post col-sm-8 row">
		<div class="post-head">
			<h2>在线留言</h2>
		</div>
		<div class="post-content">
		<form action="<?php echo $this->_tpl_vars['siteurl']; ?>
/comment.php" method="post">
			<table class="table table-striped">
				<tr><td class="w20">留言标题</td><td><input class="form-control" type="text" name="msgtitle" value="我对贵公司产品感兴趣"/></td></tr>
				<tr><td class="w20">您的姓名</td><td><input class="form-control" type="text" name="msgname"/></td></tr>
				<tr><td class="w20">联系方式</td><td><input class="form-control" type="text" name="msgcontact"/></td></tr>
				<tr><td class="w20">留言内容</td><td><textarea class="form-control" name="msgcontent" rows="10" cols="30"></textarea></td></tr>
				<tr><td class="w20">验证码</td><td><input class="form-control" type="text" name="capcode" style="width:80px;"/>&nbsp;<img style="cursor:pointer" src="<?php echo $this->_tpl_vars['siteurl']; ?>
/captcha/captcha.php" onclick="$(this).attr('src','<?php echo $this->_tpl_vars['siteurl']; ?>
/captcha/captcha.php?d='+Date())" /></td></tr>
				<tr><td class="w20">&nbsp;</td><td><input type="hidden" name="action" value="save"/><input class="btn btn-lg" type="submit" value="提交" /></td></tr>
			</table>
		</form>
		</div>
	</div>
	<div class="col-sm-4 sidebar row">
		<div class="widget">
			<h4 class="title">产品分类</h4>
			<div class="content community">
				<?php $this->assign('productcat', $this->_tpl_vars['categorydata']->GetCategoryList(0,'product',0,'')); ?>
				<?php $_from = $this->_tpl_vars['productcat']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['cattinfo']):
?>
				<p><a href="<?php echo formaturl(array('type' => 'category','siteurl' => $this->_tpl_vars['siteurl'],'name' => $this->_tpl_vars['cattinfo']->filename), $this);?>
" target="_blank"><?php echo $this->_tpl_vars['cattinfo']->name; ?>
</a></p>
				<?php endforeach; endif; unset($_from); ?>
			</div>
		</div>
		<div class="widget">
			<h4 class="title">最新产品</h4>
			<div class="content">
				<ul>
					<?php $this->assign('newproductlist', $this->_tpl_vars['productdata']->TakeProductList(0,0,6)); ?>
					<?php $_from = $this->_tpl_vars['newproductlist']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['productinfo']):
?>
					<li><a href="<?php echo formaturl(array('type' => 'product','siteurl' => $this->_tpl_vars['siteurl'],'name' => $this->_tpl_vars['productinfo']->filename), $this);?>
"><?php echo $this->_tpl_vars['productinfo']->name; ?>
</a></li>
					<?php endforeach; endif; unset($_from); ?>
				</ul>
			</div>
		</div>
		<div class="widget">
			<h4 class="title">标签库</h4>
			<div class="content tag-cloud">
				<?php $this->assign('keywordlist', $this->_tpl_vars['keyworddata']->TakeKeywordsList(0,10)); ?>
				<?php $_from = $this->_tpl_vars['keywordlist']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['keyinfo']):
?>
				<a href="<?php echo $this->_tpl_vars['keyinfo']->url; ?>
" title="<?php echo $this->_tpl_vars['keyinfo']->name; ?>
" target="_blank"><?php echo $this->_tpl_vars['keyinfo']->name; ?>
</a>
				<?php endforeach; endif; unset($_from); ?>
			</div>
		</div>
	</div>
</div>
<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "footer.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>